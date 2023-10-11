import Character from "../character/character";
import Fighter from "../fighter/fighter";

class squire extends Character {
  fighterServed;
  nepotismDegree;

  constructor(name, family, age, fighterServed, nepotismDegree) {
    super(name, family, age);
    if (!(fighterServed instanceof Fighter)) {
      throw Error();
    }

    this.fighterServed = fighterServed;
    this.nepotismDegree = nepotismDegree;
  }
}

export default squire;
