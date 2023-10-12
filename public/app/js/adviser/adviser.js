import Character from "../character/character.js";

class Adviser extends Character {
  AdviseCharacter;

  constructor(name, family, age, AdviseCharacter) {
    super(name, family, age);
    this.AdviseCharacter = AdviseCharacter;
  }

  communicate() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}

export default Adviser;
