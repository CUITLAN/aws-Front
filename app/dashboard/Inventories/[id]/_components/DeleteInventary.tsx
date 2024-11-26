'use client'; 
import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";
import DeleteInventory from "@/actions/products/DeleteInventory";

export default function DeleteInventoryForms({ id }: { id: bigint }) { // Cambia BigInt a bigint
//   const deleteInventoryById = DeleteInventory.bind(null, id.toString()); // Convierte bigint a string
//   console.log(id)  
    const handleDelete = async () => {
        try {
            const formData = new FormData();
            console.log(`Eliminando el inventario con id: ${id}`);
            await DeleteInventory(id.toString(), formData); 
            console.log("Inventario eliminado exitosamente");
        } catch (error) {
        console.error("Error al eliminar el inventario:", error);
        }
    }
    return (
        <form action={handleDelete} className="flex w-full">
        <Button color="danger" type="submit">
            <LuTrash size={20} />
        </Button>
        </form>
    );
}
