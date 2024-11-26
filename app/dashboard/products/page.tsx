import createProduct from "@/actions/products/create";
import { API_URL } from "@/contants";
import { Button, Input } from "@nextui-org/react";
import SelectCategories from "./_components/SelectCategories";
import { Category } from "@/entities";
const ProductMainPage = async () => {
  let categories: Category[] = [];
  try {
    const response = await fetch(`${API_URL}/categorias`, {
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      categories = await response.json(); // Debe devolver un array con id y name
    } else {
      console.error("Error al cargar categorías:", await response.text());
    }
  } catch (err) {
    console.error("Error de red al cargar categorías:", err);
  }

  return (
    <form action={createProduct} className="px-10 justify-center pt-10">
      <div className="flex flex-col px-10 py-10 rounded-md gap-6 bg-gray-300">
        <h1 className="text-4xl font-bold text-black text-center">Crear Producto</h1>

        <Input name="name" label="Nombre del Producto" className="text-lg" size="lg" />
        <Input name="price" label="Precio" className="text-lg" size="lg" />
        <Input name="description" label="Descripción" className="text-lg" size="lg" />
        <Input name="technical_description" label="Descripción Técnica" className="text-lg" size="lg" />
        <Input name="sat_key" label="Clave SAT" className="text-lg" size="lg" />
        <Input name="data_sheet" label="Ficha Técnica (Link)" className="text-lg" size="lg" />

        {categories.length > 0 ? (
          <SelectCategories categories={categories} />
        ) : (
          <p className="text-red-500">No se encontraron categorías</p>
        )}

        <Button type="submit" color="primary" className="text-lg py-3">
          Crear Producto
        </Button>
      </div>
    </form>
  );
};

export default ProductMainPage;
