import King from "./king/king";
import Adviser from "./adviser/adviser";
import Fighter from "./fighter/fighter";
import Squire from "./squire/squire";

const joffreyBaratheon = new King(
  "JoffreyBaratheon",
  "Casa Baratheon de Desembarco",
  13,
  1,
);

const jaimeLannister = new Fighter(
  "Jaime Lannister",
  "Casa Lannister",
  40,
  "sword",
  7,
);

const daenerysTargaryen = new Fighter(
  "Daenerys_Targaryen",
  "Casa Targaryen",
  26,
  "sword",
  9,
);

const lannister = new Adviser(
  "Lannister",
  "Casa Lannister",
  24,
  daenerysTargaryen,
);

const bronn = new Squire("Bronn", "Casa Lannister", 23, jaimeLannister, 10);

const characters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  lannister,
  bronn,
];

const charactersCommunicate = (characters) =>
  characters.map((character) => character.communicate());

charactersCommunicate(characters).forEach((communicate) =>
  console.log(communicate),
);

jaimeLannister.die();

lannister.die();
