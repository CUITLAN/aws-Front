import { API_URL } from "@/contants";
import { Inventory } from "@/entities";
import React from "react";
import AddInventoryForm from "./[id]/_components/AddInventoryform";

// Función para obtener datos en tiempo de compilación
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/inventory/`);
  if (!res.ok) {
    throw new Error("No se pudieron obtener los datos de inventario.");
  }

  const inventory: Inventory[] = await res.json();

  return {
    props: {
      inventory,
    },
  };
}

const page = ({ inventory }: { inventory: Inventory[] }) => {
  return (
    <div className="px-10 justify-center pt-10">
      {/* Renderiza el formulario para agregar inventario */}
      <AddInventoryForm />

    </div>
  );
};

export default page;
