import Character from "../character/character.js";

class King extends Character {
  yearsOfReign;

  constructor(name, family, age, yearsOfReign) {
    super(name, family, age);
    this.yearsOfReign = yearsOfReign;
  }

  communicate() {
    return "Vais a morir todos";
  }
}

export default King;
