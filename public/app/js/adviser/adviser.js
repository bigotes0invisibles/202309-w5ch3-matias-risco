import Character from "../character/character";

class Adviser extends Character {
  AdviseCharacter;

  constructor(name, family, age, AdviseCharacter) {
    super(name, family, age);
    this.AdviseCharacter = AdviseCharacter;
  }

  communicate() {
    return "Soy un loser";
  }
}

export default Adviser;
