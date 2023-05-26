import { type ICreateStarDto } from "src/app/dto/star/createStar.dto";

export const validateFields = (star: ICreateStarDto) => {
  if (!star) {
    throw new Error("Fields not valid!");
  }
};
