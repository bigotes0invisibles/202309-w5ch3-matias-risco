import Character from "../character/character";

class Fighter extends Character {
  weapon;
  dexterity;

  constructor(name, family, age, weapon, dexterity) {
    super(name, family, age);
    this.weapon = weapon;
    this.dexterity = dexterity;
  }
}

export default Fighter;
