"use server";

import { API_URL } from "@/contants";
import { revalidateTag } from "next/cache";

export default async function UpdateProducts(ProductId: string, formData: FormData) {
    let product: any = {};

    for (const key of formData.keys()) {
        if(!key.includes("ACTION")){
            product[key] = formData.get(key);
        }
    }
    product.price =+ product.price;
    product.countSeal =+ product.countSeal;
    const res = await fetch(`${API_URL}/products/${ProductId}`, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
            "content-type": "application/json"
        }
    });

    if (res.status == 200) {
        revalidateTag("dashboard:products");
        revalidateTag(`dashboard:products:${ProductId}`);
    }
}
