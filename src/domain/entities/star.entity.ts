export class Star {
  id?: string;
  name: string;
  age: string;
  description: string;
  color: string;

  constructor({ id, name, age, description, color }) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.description = description;
    this.color = color;
  }
}
