"use server";

import { API_URL } from "@/contants";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteProducts(productId: string, formData: FormData) {
    let products: any = {};
  
    for (const key of formData.keys()) {
      products[key] = formData.get(key);
    }
  
    const res = await fetch(`${API_URL}/products/${productId}`, {
      method: "DELETE",
    });
  
    console.log(res.status);
    if (res.status == 200) {
      revalidateTag("dashboard:products");
      redirect("/dashboard/products");
    }
  }
  