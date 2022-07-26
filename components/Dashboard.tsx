import React, { useEffect } from "react";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <main>
      <Sidebar />
      <Body />
      <Right />
    </main>
  );
};

export default Dashboard;
