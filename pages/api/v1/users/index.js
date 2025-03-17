import { createRouter } from "next-connect";
import controller from "infra/controller.js";
import user from "models/user.js";

const router = createRouter();

router.post(postHandler);

export default router.handler(controller.errorHandlers);

async function postHandler(request, response) {
  const usersInputValues = request.body;
  const newUser = await user.create(usersInputValues);
  return response.status(201).json(newUser);

}
