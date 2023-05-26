import { type ICreateStarDto } from "src/app/dto/star/createStar.dto";

export interface ICreateStarPort {
  createStar: (star: ICreateStarDto) => void;
}
