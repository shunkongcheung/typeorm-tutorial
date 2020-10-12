import prompts from "prompts";

import { deleteProductById, listProducts } from "./database";

const deleteProduct = async () => {
  const products = await listProducts();

  if (!products.length) {
    console.log(`Nothing product is deleted.`);
    return;
  }

  const { id } = await prompts({
    type: "select",
    name: "id",
    message: "Select a product to be deleted",
    choices: products.map((product) => ({
      title: `${product.name} (${product.id})`,
      value: product.id,
    })),
    validate: (id: number) => {
      if (!id) return "Please select a product.";
      return true;
    },
  });
  await deleteProductById(id);
  console.log(`A Product of ${id} deleted.`);
};

export default deleteProduct;
