var GovernmentRequirements = {
  despotic_empire: {requires: "None", prohibits: ["Fanatic Individualist", "Individualist"]},
  despotic_hegemony: {requires: "Materialist", prohibits: ["Fanatic Individualist", "Individualist"]},
  direct_democracy: {requires: "Direct Democracy", prohibits: ["Collectivist", "Fanatic Collectivist"]},
  divine_mandate: {requires: "Spiritualist", prohibits: ["Fanatic Individualist", "Individualist"]},
  enlightened_monarchy: {requires: "Pacifist", prohibits: ["Fanatic Individualist", "Individualist"]},
  indirect_democracy: {requires: "None", prohibits: ["Collectivist", "Fanatic Collectivist"]},
  military_dictatorship: {requires: "Militarist", prohibits: ["Fanatic Individualist", "Individualist"]},
  military_junta: {requires: "Militarist", prohibits: ["Fanatic Collectivist", "Fanatic Individualist"]},
  military_republic: {requires: "Militarist", prohibits: ["Fanatic Collectivist"]},
  moral_democracy: {requires: "Pacifist", prohibits: ["Collectivist", "Fanatic Collectivist"]},
  peaceful_bureaucracy: {requires: "Pacifist", prohibits: ["Fanatic Collectivist", "Fanatic Individualist"]},
  plutocratic_oligarchy: {requires: "None", prohibits: ["Fanatic Collectivist", "Fanatic Individualist"]},
  science_directorate: {requires: "Science Directorate", prohibits: ["Fanatic Collectivist", "Fanatic Individualist"]},
  theocratic_oligarchy: {requires: "Spiritualist", prohibits: ["Fanatic Collectivist", "Fanatic Individualist"]},
  theocratic_republic: {requires: "Spiritualist", prohibits: ["Collectivist", "Fanatic Collectivist"]}
  };

module.exports = GovernmentRequirements;
