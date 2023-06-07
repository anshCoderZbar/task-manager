import React from "react";

import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import { ProjectsOverView } from "views/admin/projects";

import SignIn from "views/auth/SignIn";

import { MdHome, MdPerson, MdWorkOutline, MdBadge } from "react-icons/md";
import { Employees } from "views/admin/users";
import { SingleEmployee } from "views/admin/users/components/SingleEmployee";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    employee: false,
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Profile",
    layout: "/admin",
    employee: false,
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Employees",
    layout: "/admin",
    employee: false,
    path: "employees",
    icon: <MdBadge className="h-6 w-6" />,
    component: <Employees />,
  },
  {
    layout: "/admin",
    employee: false,
    path: "/employees/:id",
    component: <SingleEmployee />,
  },
  {
    name: "Projects",
    layout: "/admin",
    employee: true,
    path: "projects",
    icon: <MdWorkOutline className="h-6 w-6" />,
    component: <ProjectsOverView />,
  },
  {
    layout: "/auth",
    employee: true,
    path: "sign-in",
    component: <SignIn />,
  },
];
export default routes;
