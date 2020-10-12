import { ProductEntity, UserEntity } from "../entities";

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
