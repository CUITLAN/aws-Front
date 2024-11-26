"use server";

import { API_URL } from "@/contants";
import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData) {
    let products: any = {};
  
    for (const key of formData.keys()) {
      if (!key.includes("$ACTION_ID")) {
        products[key] = formData.get(key);
      }
    }
    products.price = +products.price; // Asegúrate de convertir el precio a número
    products.countSeal = +products.countSeal; // Parece un campo extra, asegúrate de que sea necesario
  
    try {
      const res = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      });
  
      if (res.status === 201) {
        revalidateTag("dashboard:products");
      } else {
        const error = await res.json();
        console.error("Error al crear el producto:", error);
      }
    } catch (err) {
      console.error("Error de red al crear el producto:", err);
    }
  }
  