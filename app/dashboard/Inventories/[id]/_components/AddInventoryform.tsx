"use client";
import { Input, Button } from "@nextui-org/react";
import createInventory from "@/actions/products/createInventory";
export default function InventoryForm() {
  return (
    <form
      action={createInventory}
      method="POST" // Este debe ser estático y no dinámico
      className="px-10 justify-center pt-10"
    >
      <div className="flex flex-col px-10 py-10 rounded-md gap-6 bg-gray-300">
        <h1 className="text-4xl font-bold text-black text-center">
          Crear Inventario
        </h1>
        <Input
          name="quantity"
          label="Cantidad"
          type="number"
          className="text-lg"
          size="lg"
          required
        />
        <Input
          name="sold_quantity"
          label="Cantidad Vendida"
          type="number"
          className="text-lg"
          size="lg"
          defaultValue="0"
        />
        <Input
          name="bin_location_id"
          label="Ubicación (ID)"
          type="number"
          className="text-lg"
          size="lg"
        />
        <Input
          name="status_id"
          label="Estado (ID)"
          type="number"
          className="text-lg"
          size="lg"
        />
        <Button type="submit" color="primary" className="text-lg py-3">
          Crear Inventario
        </Button>
      </div>
    </form>
  );
}
