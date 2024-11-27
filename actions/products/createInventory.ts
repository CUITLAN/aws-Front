import { API_URL } from "@/contants";

export default async function createInventory(formData: FormData) {
  const inventory: Record<string, any> = {};

  // Extraer los datos del formulario
  for (const key of formData.keys()) {
    if (!key.includes("$ACTION_ID")) {
      inventory[key] = formData.get(key);
    }
  }

  // Convertir valores numéricos
  inventory.quantity = parseFloat(inventory.quantity);
  inventory.sold_quantity = parseFloat(inventory.sold_quantity);
  inventory.bin_location_id = parseInt(inventory.bin_location_id, 10);
  inventory.status_id = parseInt(inventory.status_id, 10);

  try {
    const res = await fetch(`${API_URL}/inventory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inventory),
    });

    if (res.ok) {
      console.log("Inventario creado exitosamente");
    
      // Solo recargar la página si estamos en el cliente
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    } else {
      const error = await res.json();
      console.error("Error al crear el inventario:", error);
    }
    
  } catch (err) {
    console.error("Error de red al crear el inventario:", err);
  }
}
