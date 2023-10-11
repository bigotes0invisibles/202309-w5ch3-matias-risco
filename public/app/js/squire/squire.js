import Character from "../character/character.js";
import Fighter from "../fighter/fighter.js";

class Squire extends Character {
  fighterServed;
  nepotismDegree;

  constructor(name, family, age, fighterServed, nepotismDegree) {
    super(name, family, age);
    if (!(fighterServed instanceof Fighter)) {
      throw Error();
    }

    this.fighterServed = fighterServed;

    if (nepotismDegree < 0 || nepotismDegree > 10) {
      throw Error(
        "Error: squire class nepotismDegree is not a number between 0 and 10",
      );
    }

    this.nepotismDegree = nepotismDegree;
  }

  communicate() {
    return "Soy un loser";
  }
}

export default Squire;
