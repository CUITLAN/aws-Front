'use client';
import { useState, ChangeEvent, FormEvent } from "react";
import { Button, Input } from "@nextui-org/react";
import { API_URL } from "@/contants";
import createInventory from "@/actions/products/createInventory";

export default function AddInventoryForm() {
    const [formData, setFormData] = useState({ quantity: '', sold_quantity: '', bin_location_id: '', status_id: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await createInventory(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 m-2 bg-gray-300">
            <Input fullWidth label="Cantidad" name="quantity" placeholder="Enter quantity" onChange={handleChange} />
            <Input fullWidth label="Cantidad Vendida" name="sold_quantity" placeholder="Enter sold quantity" onChange={handleChange} />
            <Input fullWidth label="Ubicación" name="bin_location_id" placeholder="Enter location" onChange={handleChange} />
            <Input fullWidth label="Estatus" name="status_id" placeholder="Enter status" onChange={handleChange} />
            <Button className="mt-2" type="submit">Agregar al inventario</Button>
        </form>
    );
}
