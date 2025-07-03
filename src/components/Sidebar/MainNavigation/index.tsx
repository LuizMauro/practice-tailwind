import React from "react";
import { NavItem } from "./NavItem";
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from "lucide-react";

const MainNavigation: React.FC = () => {
  return (
    <nav className="space-y-0.5">
      <NavItem icon={Home} title="Home" />
      <NavItem icon={BarChart} title="Dashboard" />
      <NavItem icon={SquareStack} title="Projects" />
      <NavItem icon={CheckSquare} title="Tasks" />
      <NavItem icon={Flag} title="Reporting" />
      <NavItem icon={Users} title="Users" />
    </nav>
  );
};

export { MainNavigation };
