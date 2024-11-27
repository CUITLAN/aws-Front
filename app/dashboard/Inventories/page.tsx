import { API_URL } from "@/contants";
import { Inventory } from "@/entities";
import React from 'react';
import { Card } from "@nextui-org/react";
import DeleteInventoryForms from "./[id]/_components/DeleteInventary";
import AddInventoryForm from "./[id]/_components/AddInventoryform";

const page = async () => {
    const res = await fetch(`${API_URL}/inventory/`);
    const inventory: Inventory[] = await res.json();
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: 10, flexWrap: "wrap", gap: 10 }}>
            <AddInventoryForm />
        </div>
    )
}

export default page;
