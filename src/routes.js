import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import { ProjectsOverView } from "views/admin/projects";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdPerson,
  MdLock,
  MdWorkOutline,
  MdBadge,
} from "react-icons/md";
import { Employees } from "views/admin/users";
import { SingleEmployee } from "views/admin/users/components/SingleEmployee";

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
  {
    name: "Employees",
    layout: "/admin",
    path: "employees",
    icon: <MdBadge className="h-6 w-6" />,
    component: <Employees />,
  },
  {
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
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
