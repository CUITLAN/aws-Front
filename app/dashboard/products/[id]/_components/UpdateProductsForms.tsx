import UpdateProducts from '@/actions/products/update';
import { Product, Category } from '@/entities';
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import SelectCategories from '../../_components/SelectCategories';
const UpdateProductsForms = ({ product, providers }: { product: Product; providers: Category[] }) => {
    const { id } = product;
    const updateProductswithId = UpdateProducts.bind(null, id.toString()); // Convierte bigint a string
    console.log("");
    return (
      <form action={updateProductswithId} className="p-10 flex flex-col gap-2">
        <Input name="name" label="Nombre del Producto" />
        <Input name="price" label="Precio" />
        <Input name="description" label="Descripción" />
        <Input name="technical_description" label="Descripción Técnica" />
        <Input name="sat_key" label="Clave SAT" />
        <Input name="data_sheet" label="Link" />
        <SelectCategories categories={providers} defaultProvider={product.category?.name} />
        <div className="flex flex-row flex-grow-0">
          <Button type="submit" color="primary">
            Guardar Cambios
          </Button>
        </div>
      </form>
    );
  };
  
  export default UpdateProductsForms;
  