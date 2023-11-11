import { Ingredient } from './ingredient';

export class Pizza {
  public name: String;
  public img: String;
  public desc: String;
  ingredients?: Ingredient[];

  constructor(name: String, img: String, desc: String) {
    this.name = name;
    this.img = img;
    this.desc = desc;
  }
}
