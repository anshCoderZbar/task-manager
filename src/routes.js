import React from "react";

import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import { ProjectsOverView } from "views/admin/projects";

import SignIn from "views/auth/SignIn";

import { MdHome, MdPerson, MdWorkOutline, MdBadge } from "react-icons/md";
import { Employees } from "views/admin/users";
import { SingleEmployee } from "views/admin/users/components/SingleEmployee";

const userData = JSON.parse(sessionStorage.getItem("userData"));
const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  userData?.user?.role === "admin" && {
    name: "Employees",
    layout: "/admin",
    path: "employees",
    icon: <MdBadge className="h-6 w-6" />,
    component: <Employees />,
  },
  userData?.user?.role === "admin" && {
    layout: "/admin",
    path: "/employees/:id",
    component: <SingleEmployee />,
  },
  {
    name: "Projects",
    layout: "/admin",
    path: "projects",
    icon: <MdWorkOutline className="h-6 w-6" />,
    component: <ProjectsOverView />,
  },
  {
    layout: "/auth",
    path: "sign-in",
    component: <SignIn />,
  },
];
export default routes;
