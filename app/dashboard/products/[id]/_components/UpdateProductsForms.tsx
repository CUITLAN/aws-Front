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
        <Input defaultValue={product.name} name="name" label="Nombre del Producto" />
        <Input defaultValue={String(product.price)} name="price" label="Precio" />
        <Input defaultValue={product.description}name="description" label="Descripción" />
        <Input defaultValue={product.technical_description} name="technical_description" label="Descripción Técnica" />
        <Input defaultValue={product.sat_key} name="sat_key" label="Clave SAT" />
        <Input defaultValue={product.data_sheet} name="data_sheet" label="Link" />
        <SelectCategories categories={providers} defaultProvider={product.category?.id.toString()} />
        <div className="flex flex-row flex-grow-0">
          <Button type="submit" color="primary">
            Guardar Cambios
          </Button>
        </div>
      </form>
    );
  };
  
  export default UpdateProductsForms;
  