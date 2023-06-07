import React from "react";
import { Link, useLocation } from "react-router-dom";

export function SidebarLinks(props) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  console.log(props);

  let location = useLocation();

  const { routes } = props;

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    const filteredRoutes = routes.filter((route) => {
      if (userData?.user?.role === "admin") {
        return true;
      } else {
        return route?.employee;
      }
    });

    return filteredRoutes?.map((route, index) => {
      if (
        (route.layout === "/admin" && route.name) ||
        route.layout === "/auth"
      ) {
        return (
          <Link key={index} to={route.layout + "/" + route.path}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : null}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        );
      }
    });
  };
  return createLinks(routes);
}

export default SidebarLinks;
