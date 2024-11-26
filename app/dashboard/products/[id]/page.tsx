import { API_URL } from "@/contants";
import { Product, Category } from "@/entities";
import UpdateProductsForms from "./_components/UpdateProductsForms";
import DeleteProductsForms from "./_components/DeleteProducrs";

const ProductPage = async ({ params }: { params: { id: bigint } }) => {
  const res = await fetch(`${API_URL}/products/${params.id}`, {
    
    next:{
      tags:[`dashboard:products:${params.id}`]
    }
  });
  const product: Product = await res.json();
  
  const res2 = await fetch(`${API_URL}/categorias/`);
  const providers: Category[] = await res2.json();

  return (
    <div className="w-full">
      <div className="bg-gray-600">
      <h1 className="w-full font-bold text-white text-center text-2xl py-2">{product.name}</h1>
      <h2 className="text-xl font-bold text-white text-center">${product.price}</h2>
      <h2 className="text-md font-bold text-white text-center py-2">Descripcion: {product.description}</h2>
      <h2 className="text-md font-bold text-white text-center py-2">Estatus: {product.category?.name}</h2>

      </div>
      
      <UpdateProductsForms product={product} providers={providers} />
      <div className="pl-10">
      <DeleteProductsForms id={product.id}/>
      </div>

    </div>
  );
};

export default ProductPage;
