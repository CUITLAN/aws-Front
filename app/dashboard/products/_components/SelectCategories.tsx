'use client';

import { Select, SelectItem } from "@nextui-org/react";
import { Category } from "@/entities";

export default function SelectCategories({
  categories,
  defaultProvider,
}: {
  categories: Category[];
  defaultProvider?: string;
}) {
  console.log("Proveedor por defecto:", defaultProvider);

  return (
    <Select
      defaultSelectedKeys={defaultProvider ? [defaultProvider] : undefined}
      label="Products"
      name="category_id"
    >
      {categories.map((category) => (
        <SelectItem
          key={category.id.toString()} 
          value={category.id.toString()} 
        >
          {category.name}
        </SelectItem>
      ))}
    </Select>
  );
}
