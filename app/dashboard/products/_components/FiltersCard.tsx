"use client";
import { Product, Category } from "@/entities";
import Link from "next/link";
import ProductCard2 from "./ProductCard";
import { useEffect, useState } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";

export default function FilterCard({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const [filtered, setFilter] = useState<string>("");
  const [provider, setProvider] = useState<string>();
  const [productsList, setProductsList] = useState<Product[]>(products);
  const [show, setshow] = useState(false);

  useEffect(() => {
    const filteredProducts = products.filter((product: Product) => {
      if (product.name.toLowerCase().includes(filtered.toLowerCase())) {
        return true;
      } else return false;
    });
    setProductsList(filteredProducts);
    setshow(true);
  }, [filtered, categories, products]);

  return (
    <div className="min-h-[90vh] h-screen overflow-y-auto flex flex-col gap-4 border-r-orange-200 px-10 border-r-2 pt-10">
      <Select
        label="Categoria"
        onChange={(e) => {
          setProvider(e.target.value);
        }}
      >
        {categories.map((category) => (
          <SelectItem key={category.id.toString()} value={category.id.toString()}>
            {category.name}
          </SelectItem>
        ))}
      </Select>
      <Input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        label="Nombre del Producto"
      />
      {show &&
        productsList.map((product: Product) => (
          <Link
            href={{ pathname: `/dashboard/products/${product.id}` }}
            key={product.id.toString()} // Convertimos bigint a string
          >
            <ProductCard2 product={product} />
          </Link>
        ))}
    </div>
  );
}
