import React from 'react';
import NavItem from './navItem';
import { CiDeliveryTruck } from "react-icons/ci";
import { CiLaptop } from "react-icons/ci";

const Sidebar = () => {
  return (
    <nav className="w-1/12 h-[90vh] min-w-[8.3333%] bg-gray-400 flex flex-col items-center py-20 justify-start gap-10">
      <NavItem icon={<CiDeliveryTruck className="text-4xl" />} path="/dashboard/Inventories" />
      <NavItem icon={<CiLaptop className="text-4xl" />} path="/dashboard/products" />
    </nav>
  );
};

export default Sidebar;
