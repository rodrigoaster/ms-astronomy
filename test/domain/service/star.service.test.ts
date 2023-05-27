import { type ICreateStarDto } from '../../../src/app/dtos/star/createStar.dto';
import { type IStarOut } from '../../../src/app/ports/out/star.query';
import { Star } from '../../../src/domain/entities/star.entity';
import { validateFields } from '../../../src/domain/helper/validateFields.helper';
import { StarService } from '../../../src/domain/service/star.service';

class InMemoryRepository implements IStarOut {
  private readonly stars: Star[] = [];

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

describe('CreateStarService', () => {
  const repository = new InMemoryRepository();
  const service = new StarService(repository);

  it('should be create an star', async () => {
    const starProps = {
      name: 'Sirius',
      age: '1000 Anos-luz',
      description: 'Star in constellation of Águia',
      color: 'Blue',
    };

    const response = await service.createStar(starProps);

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Star);
    expect(response).toHaveProperty('id');
  });
});
