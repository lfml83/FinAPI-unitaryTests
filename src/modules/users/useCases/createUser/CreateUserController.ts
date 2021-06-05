import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserUseCase);

    const user = await createUser.execute({
      name,
      email,
      password,
    });
    console.log(user);

    return response.status(201).send();
  }
}
