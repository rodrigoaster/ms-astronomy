import { type ICreateStarDto } from "src/app/dtos/star/createStar.dto";
import { type Star } from "src/domain/entities/star.entity";

export interface IStarOut {
  createStar: (star: ICreateStarDto) => Promise<Star>;
}
