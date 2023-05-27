import { ICreateStarDto } from "src/app/dtos/star/createStar.dto";
import { Star } from "src/domain/entities/star.entity";

export interface IStarOut {
  createStar(star: ICreateStarDto): Promise<Star>;
}
