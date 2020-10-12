import { CategoryEntity, ProductEntity } from "../entities";

interface Category {
  name: string;
  products: Array<ProductEntity>;
}

/*
 * Lesson:
 * learn about how to save entities with many-to-many relationship
 */

const insertCategories = async (
  categories: Array<Category>
): Promise<Array<CategoryEntity>> => {
  return [];
};

export default insertCategories;
