import { ProductEntity } from "../entities";

type OrderBy = "id" | "name";

interface ListProductsProps {
  orderBy: OrderBy;
  asc: boolean;
  page: number;
  pageSize: number;
}

const listProducts = async (
  props?: ListProductsProps
): Promise<Array<ProductEntity>> => {
  return [];
};

export default listProducts;
