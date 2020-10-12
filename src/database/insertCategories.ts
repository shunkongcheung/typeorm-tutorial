import { CategoryEntity, ProductEntity } from "../entities";

interface Category {
  name: string;
  products: Array<ProductEntity>;
}

const insertCategories = async (
  categories: Array<Category>
): Promise<Array<CategoryEntity>> => {
  return [];
};

export default insertCategories;
