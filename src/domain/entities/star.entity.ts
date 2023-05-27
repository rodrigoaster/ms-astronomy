import { randomUUID } from 'crypto'

export class Star {
  id: string;
  name: string;
  age: string;
  description: string;
  color: string;

  constructor(props: Omit<Star, "id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = randomUUID()
    }
  }
}
