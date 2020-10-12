import prompts from "prompts";

import { listProducts as listProductsFromDB } from "./database";

const validateNonEmpty = (val: any) => (!!val ? true : "Value required");

const validatePositive = (val: number) => val > 0;

const listProducts = async () => {
  const opts = await prompts([
    {
      type: "select",
      name: "orderBy",
      message: "Select an order by column",
      choices: [
        { title: "id", value: "id" },
        { title: "name", value: "name" },
      ],
      validate: validateNonEmpty,
    },
    {
      type: "select",
      name: "asc",
      message: "Order by Ascending / Descending",
      choices: [
        { title: "Ascending", value: true },
        { title: "Descending", value: false },
      ],
    },

    {
      type: "number",
      name: "page",
      message: "Enter a page number",
      validate: validatePositive,
    },
    {
      type: "number",
      name: "pageSize",
      message: "Enter a page size",
      validate: validatePositive,
    },
  ]);

  const data = await listProductsFromDB(opts);
  const dataStr = JSON.stringify(data, null, 4);
  console.log(`You retrieved the following products:\n${dataStr}`);
};

export default listProducts;
