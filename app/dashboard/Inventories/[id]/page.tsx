import { API_URL } from "@/contants";
import { Inventory } from "@/entities";
import React from 'react'
import {Card} from "@nextui-org/react";
import DeleteInventoryForms from "./_components/DeleteInventary";


const page = async () => {
  const res = await fetch(`${API_URL}/inventory/`);
  const inventory: Inventory[] = await res.json();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: 10, flexWrap: "wrap", gap: 10}}>
      {inventory.length > 0 ? (
        inventory.map((item) => (
          <Card className="p-4 m-2 bg-gray-300">
              <p className="text-default-500">Nombre: {item.id} </p>
              <p className="text-default-500"> Cantidad Vendida: {item.sold_quantity} </p>
              <p className="text-default-500"> Location:{item.bin_location_id} </p>
              <p className="text-default-500">Estatus: {item.status_id} </p>
              <DeleteInventoryForms id={item.id}/>
          </Card>
        ))
      ) : (
        <p className="text-center text-default-500">No hay nada en el inventario</p>
      )}
    </div>
  )

}

export default page;

