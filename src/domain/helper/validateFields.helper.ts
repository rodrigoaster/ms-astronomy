import { type ICreateStarDto } from "src/app/dtos/star/createStar.dto";

export const validateFields = (star: ICreateStarDto) => {
  if (!star) {
    throw new Error("Fields not valid!");
  }
};
