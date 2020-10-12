import prompts from "prompts";

import deleteProduct from "./deleteProduct";
import listProduct from "./listProduct";
import seedData from "./seedData";

type ActionFunction = () => Promise<void>;
type Action = "exit" | ActionFunction;

const start = async () => {
  let running = true;

  while (running) {
    const { action }: { action: Action } = await prompts({
      type: "select",
      name: "action",
      message: "Select an action",
      choices: [
        { title: "Insert seed data", value: seedData },
        { title: "List product within product table", value: listProduct },
        { title: "Delete a Product", value: deleteProduct },
        { title: "Exit console", value: "exit" },
      ],
      validate: (action: any) => {
        if (!action) return "Please select an action.";
        return true;
      },
    });

    if (action === "exit") running = false;
    else await action();
  }

  console.log("Good bye, hope you enjoyed.");
};

start();
