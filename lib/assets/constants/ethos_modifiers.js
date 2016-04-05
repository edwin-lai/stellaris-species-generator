var Ethos_Modifiers = {
  fanatic_militarist: {
    rivalry_influence_gain: 0.5,
    alliance_cost: 0.75,
    war_tolerance: 0.75,
    war_happiness: 0.10,
    army_damage: 0.20
  },
  militarist: {
    rivalry_influence_gain: 0.25,
    alliance_cost: 0.50,
    war_tolerance: 0.50,
    war_happiness: 0.05,
    army_damage: 0.10
  },
  fanatic_spiritualist: {
    happiness: 0.1
  },
  spiritualist: {
    happiness: 0.05
  },
  fanatic_xenophobe: {
    alien_slavery_tolerence: 1,
    xenophobia: 0.2
  },
  xenophobe: {
    alien_slavery_tolerence: 0.5,
    xenophobia: 0.1
  },
  fanatic_collectivist: {
    slavery_tolerance: 1,
    food_requirement: -0.1
  },
  collectivist: {
    slavery_tolerance: 0.5,
    food_requirement: -0.05
  },
  fanatic_individualist: {
    energy_credits: 0.2,
    slavery_tolerance: -1,
    ethics_divergence: 0.05
  },
  individualist: {},
  fanatic_xenophile: {
    xenophobia: 0.2
  },
  xenophile: {
    xenophobia: 0.1
  },
  fanatic_materialist: {
    physics_output: 0.1,
    society_output: 0.1,
    engineering_output: 0.1
  },
  materialist: {
    physics_output: 0.05,
    society_output: 0.05,
    engineering_output: 0.05
  },
  fanatic_pacifist: {
    food: 0.2,
    war_tolerance: -0.50,
    war_happiness: -0.20,
    army_damage: -0.20
  },
  pacifist: {
    food: 0.1,
    war_tolerance: -0.25,
    war_happiness: -0.10,
    army_damage: -0.10
  }
};

module.exports = Ethos_Modifiers;
