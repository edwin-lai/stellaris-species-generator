var EthosModifiers = {
  fanatic_militarist: {
    rivalry_influence_gain: 50,
    alliance_cost: 75,
    war_tolerance: 75,
    war_happiness: 10,
    army_damage: 20
  },
  militarist: {
    rivalry_influence_gain: 25,
    alliance_cost: 50,
    war_tolerance: 50,
    war_happiness: 5,
    army_damage: 10
  },
  fanatic_spiritualist: {
    happiness: 10
  },
  spiritualist: {
    happiness: 5
  },
  fanatic_xenophobe: {
    alien_slavery_tolerence: 100,
    xenophobia: 20
  },
  xenophobe: {
    alien_slavery_tolerence: 50,
    xenophobia: 10
  },
  fanatic_collectivist: {
    slavery_tolerance: 100,
    food_requirement: -10
  },
  collectivist: {
    slavery_tolerance: 50,
    food_requirement: -5
  },
  fanatic_individualist: {
    energy_credits: 20,
    slavery_tolerance: -100,
    ethics_divergence: 10
  },
  individualist: {
    energy_credits: 10,
    slavery_tolerance: -50,
    ethics_divergence: 5
  },
  fanatic_xenophile: {
    xenophobia: 20
  },
  xenophile: {
    xenophobia: 10
  },
  fanatic_materialist: {
    physics_output: 10,
    society_output: 10,
    engineering_output: 10
  },
  materialist: {
    physics_output: 5,
    society_output: 5,
    engineering_output: 5
  },
  fanatic_pacifist: {
    food: 20,
    war_tolerance: -50,
    war_happiness: -20,
    army_damage: -20
  },
  pacifist: {
    food: 10,
    war_tolerance: -25,
    war_happiness: -10,
    army_damage: -10
  }
};

module.exports = EthosModifiers;
