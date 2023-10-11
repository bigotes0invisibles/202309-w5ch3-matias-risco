class Character {
  name;
  family;
  age;
  alive;
  show;

  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.alive = true;
    this.show = "Juego de tronos";
  }
}

export default Character;
