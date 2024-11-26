import createProduct from "@/actions/products/create";
import { API_URL } from "@/contants";
import { Button, Input } from "@nextui-org/react";
import SelectCategories from "./_components/SelectCategories";

const ProductMainPage = async () => {
  const responseProviders = await fetch(`${API_URL}/categorias`);
  const providers = await responseProviders.json();
  return (
    <form action={createProduct} className="  px-10 justify-center pt-10">
      <div className="flex flex-col px-10 py-10 rounded-md gap-6 bg-gray-300">
        <h1 className="2xl font-bold text-black text-center">Crear Producto</h1>
        <Input name="name" label="Nombre del Producto" />
        <Input name="price" label="Precio" />
        <Input name="description" label="description"/>
        <Input name="technical_description" label="description"/>
        <Input name="sat_key" label="sat_key" />
        <Input name="data_sheet" label="Link" />
        <SelectCategories categories={providers} /> 
        <Button type="submit" color="primary">
          Crear Producto
        </Button>
      </div>
    </form>
  );
};

export default ProductMainPage;
