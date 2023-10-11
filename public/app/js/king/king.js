import Character from "../character/character";

class King extends Character {
  yearsOfReign;

  constructor(name, family, age, yearsOfReign) {
    super(name, family, age);
    this.yearsOfReign = yearsOfReign;
  }
}

export default King;
