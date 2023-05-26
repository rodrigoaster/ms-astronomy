import { type ICreateStarDto } from "src/app/dto/star/createStar.dto";

export abstract class IStarRepository {
  createStar: (star: ICreateStarDto) => void;
}
