import { Star } from "../../../src/domain/entities/star.entity";
import { CreateStarService } from "../../../src/domain/service/createStar.service";

describe("CreateStarService", () => {
  const service = new CreateStarService();

  it("should be create an star", () => {
    const star = {
      name: "Sirius",
      age: "1000 Anos-luz",
      description: "Star in constellation of Águia",
      color: "Blue",
    };

    const response = service.createStar(star);

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Star);
    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("name");
    expect(response).toHaveProperty("age");
    expect(response).toHaveProperty("description");
    expect(response).toHaveProperty("color");
  });
});
