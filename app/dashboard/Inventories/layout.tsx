import React from "react";
import { ReactNode } from "react";
import CardInventory from "./_components/Cardinventory";

const LayoutPage = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-full flex flex-row">
      {/* Contenedor scrollable para CardInventory */}
      <div className="w-3/12 h-screen overflow-y-auto">
        <CardInventory />
      </div>

      {/* Contenido principal */}
      <div className="w-6/12">{children}</div>
    </div>
  );
};

export default LayoutPage;
