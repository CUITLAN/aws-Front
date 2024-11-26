"use server";

import { API_URL } from "@/contants";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteInventory(inventoryId: string, formData: FormData){

let inventory: any = {}

    for (const key of formData.keys()) {
        inventory[key] = formData.get(key);

        
    }
    const res = await fetch(`${API_URL}/inventory/${inventoryId}`,{
        method: "DELETE"

    })
    console.log(res.status);
        if(res.status==200){
            revalidateTag("dashbaord:Inventories")
            redirect("/dashboard/Inventories")
            
        }
}