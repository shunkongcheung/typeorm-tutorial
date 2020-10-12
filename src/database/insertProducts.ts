import { ProductEntity, UserEntity } from "../entities";

/*
 * Lesson:
 * learn about how to save entities with foreign key
 */

interface Product {
  name: string;
  createdBy: UserEntity;
}

const insertProducts = async (
  products: Array<Product>
): Promise<Array<ProductEntity>> => {
  return [];
};

export default insertProducts;
