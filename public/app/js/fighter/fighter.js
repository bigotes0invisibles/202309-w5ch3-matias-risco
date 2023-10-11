import Character from "../character/character";

class Fighter extends Character {
  weapon;
  dexterity;

  constructor(name, family, age, weapon, dexterity) {
    super(name, family, age);
    this.weapon = weapon;

    if (dexterity < 0 || dexterity > 10) {
      throw Error(
        "Error: fighter class dexterity is not a number between 0 and 10",
      );
    }

    this.dexterity = dexterity;
  }

  communicate() {
    return "Primero pego y luego pregunto";
  }
}

export default Fighter;
