import { type IStarIn } from "src/app/ports/in/star.port";

import { Star } from "../entities/star.entity";
import { validateFields } from "../helper/validateFields.helper";
import { IStarOut } from "src/app/ports/out/star.query";
import { ICreateStarDto } from "src/app/dtos/star/createStar.dto";

export class StarService implements IStarIn {
  constructor(private starQuery: IStarOut) { }
  async createStar(data: ICreateStarDto): Promise<Star> {
    validateFields(data);

    const { name, age, description, color } = data;

    const star = new Star({
      name,
      age,
      description,
      color
    })

    return star
  }
}
