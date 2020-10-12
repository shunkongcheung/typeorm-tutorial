import { ProductEntity } from "../entities";

/*
 * Lesson:
 * learn about how to retrieve data with queryManager
 */

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
