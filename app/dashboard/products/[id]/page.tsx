import { API_URL } from "@/contants";
import { Product, Category } from "@/entities";
import UpdateProductsForms from "./_components/UpdateProductsForms";
import DeleteProductsForms from "./_components/DeleteProducrs";
import Link from "next/link";

// Genera las rutas dinámicas durante la exportación estática
export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) {
    throw new Error("No se pudieron obtener los productos");
  }

  const products: Product[] = await res.json();
  return products.map((product) => ({
    id: product.id,
  }));
}

// Obtiene los datos necesarios para la página estática
export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`${API_URL}/products/${params.id}`);
  if (!res.ok) {
    return {
      notFound: true, // Muestra una página de error 404 si no se encuentra el producto
    };
  }

  const product: Product = await res.json();

  const res2 = await fetch(`${API_URL}/categorias/`);
  const providers: Category[] = await res2.json();

  return {
    props: {
      product,
      providers,
    },
  };
}

// Componente principal para la página del producto
const ProductPage = ({
  product,
  providers,
}: {
  product: Product;
  providers: Category[];
}) => {
  return (
    <div className="w-full item">
      <div className="bg-gray-600">
        <h1 className="w-full font-bold text-white text-center text-2xl py-2">
          {product.name}
        </h1>
        <h2 className="text-xl font-bold text-white text-center">
          ${product.price}
        </h2>
        <h2 className="text-md font-bold text-white text-center py-2">
          Descripción: {product.description}
        </h2>
        <p className="text-xl font-bold text-blue-500 text-center">
          {product?.data_sheet ? (
            <Link href={product.data_sheet} rel="noopener noreferrer">
              Más Información
            </Link>
          ) : (
            <span>No hay información disponible</span>
          )}
        </p>
      </div>

      {/* Formulario para actualizar el producto */}
      <UpdateProductsForms product={product} providers={providers} />
      <div className="pl-10">
        {/* Formulario para eliminar el producto */}
        <DeleteProductsForms id={product.id} />
      </div>
    </div>
  );
};

export default ProductPage;
