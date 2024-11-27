import { API_URL } from "@/contants";
import { revalidateTag } from "next/cache";

export default async function createInventory(inventory: any) {
    // Asegúrate de convertir los campos necesarios a los tipos apropiados
    inventory.quantity = +inventory.quantity;
    inventory.sold_quantity = +inventory.sold_quantity; 
    inventory.bin_location_id = inventory.bin_location_id.toString(); 
    inventory.status_id = inventory.status_id.toString(); 

    try {
        const res = await fetch(`${API_URL}/inventory`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inventory),
        });

        if (res.status === 201) {
            revalidateTag("dashboard:inventory");
            console.log("Inventario creado exitosamente");
        } else {
            const error = await res.json();
            console.error("Error al crear el inventario:", error);
        }
    } catch (err) {
        console.error("Error de red al crear el inventario:", err);
    }
}
