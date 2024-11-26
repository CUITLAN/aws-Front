import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";
import DeleteProducts from "@/actions/products/DeleteProduct";

export default function DeleteProductsForms({ id }: { id: bigint }) {
  const deleteProductById = DeleteProducts.bind(null, id.toString());
  return (
    <form action={deleteProductById} className="flex w-full">
      <Button color="danger" type="submit">
        <LuTrash size={20} />
      </Button>
    </form>
  );
}
