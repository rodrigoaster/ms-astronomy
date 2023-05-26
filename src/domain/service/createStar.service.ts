import { randomUUID } from "crypto";
import { type ICreateStarPort } from "src/app/ports/in/createStar.port";

import { Star } from "../entities/star.entity";
import { validateFields } from "../helper/validateFields.helper";

export class CreateStarService implements ICreateStarPort {
  createStar(star: Star): Star {
    validateFields(star);

    const { name, age, description, color } = star;

    const starEntity = new Star({
      id: randomUUID(),
      name,
      age,
      description,
      color,
    });

    return starEntity;
  }
}
