import { type ICreateStarDto } from 'src/app/dtos/star/createStar.dto';
import { type IStarIn } from 'src/app/ports/in/star.port';
import { type IStarOut } from 'src/app/ports/out/star.query';

import { Star } from '../entities/star.entity';
import { validateFields } from '../helper/validateFields.helper';

export class StarService implements IStarIn {
  constructor(private readonly starQuery: IStarOut) {}

  async createStar(data: ICreateStarDto): Promise<Star> {
    validateFields(data);

    const { name, age, description, color } = data;

    const star = new Star({
      name,
      age,
      description,
      color,
    });

    return star;
  }
}
