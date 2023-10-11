import Character from "../character/character";

class Adviser extends Character {
  AdviseCharacter;

  constructor(name, family, age, AdviseCharacter) {
    super(name, family, age);
    this.AdviseCharacter = AdviseCharacter;
  }
}

export default Adviser;
