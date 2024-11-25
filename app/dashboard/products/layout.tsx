import { API_URL } from "@/contants";
import { Product, Category } from "@/entities";
import React from "react";
import FilterCard from "./_components/FiltersCard";
import { ReactNode } from "react";

const LayoutPage = async ({ children }: { children: ReactNode }) => {
  try {
    // Realizar solicitudes en paralelo
    const [responseProducts, responseCategories] = await Promise.all([
      fetch(`${API_URL}/products`, {
        headers: { "Content-Type": "application/json" },
        next: { tags: ["dashboard:products"] },
      }),
      fetch(`${API_URL}/categorias`, {
        headers: {
          "Content-Type": "application/json"
        },        
        next: { tags: ["dashboard:providers"] },
      }),
    ]);

    // Validar respuestas
    if (!responseProducts.ok) {
      console.error("Failed to fetch products:", responseProducts.statusText);
      return <div>Error al cargar productos</div>;
    }
    if (!responseCategories.ok) {
      console.error("Failed to fetch categories:", responseCategories.statusText);
      return <div>Error al cargar categorías</div>;
    }

    // Parsear datos
    const products: Product[] = await responseProducts.json();
    const categories: Category[] = await responseCategories.json();

    // Renderizar la página
    return (
      <div className="h-[90vh] w-full flex flex-row">
        <div className="w-3/12">
          <FilterCard products={products} categories={categories} />
        </div>
        <div className="w-6/12">{children}</div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error al cargar datos</div>;
  }
};

export default LayoutPage;
