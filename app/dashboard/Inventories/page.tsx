import { API_URL } from "@/contants";
import { Inventory } from "@/entities";
import React from 'react';
import AddInventoryForm from "./[id]/_components/AddInventoryform";

const page = async () => {
    const res = await fetch(`${API_URL}/inventory/`);
    const inventory: Inventory[] = await res.json();
    return (
        <div className="px-10 justify-center pt-10">
            
            <AddInventoryForm />
        </div>
    )
}

export default page;
