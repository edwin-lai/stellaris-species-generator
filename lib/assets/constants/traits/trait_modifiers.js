var TraitModifiers = {
  adaptive: {
    habitability: 10
  },
  agrarian: {
    food_output: 1
  },
  charismatic: {
    other_species_happiness_per_pop: 1
  },
  communal: {
    happiness: 5
  },
  conformists: {
    ethics_divergence: -20
  },
  enduring: {
    leader_lifespan: 30
  },
  extremely_adaptive: {
    habitability: 20
  },
  industrious: {
    minerals: 15
  },
  intelligent: {
    engineering_output: 10,
    physics_output: 10,
    society_output: 10
  },
  natural_engineers: {
    engineering_output: 15
  },
  natural_physicists: {
    physics_output: 15
  },
  natural_sociologists: {
    society_output: 15
  },
  nomadic: {
    migration_time: -50
  },
  quick_learners: {
    leader_experience_gain: 25
  },
  rapid_breeders: {
    growth_time: -10
  },
  resilient: {
    militia_health: 100,
    bombardment_resistance: 200
  },
  strong: {
    army_damage: 20,
    minerals: 5
  },
  talented: {
    leader_skill_levels: 1
  },
  thrifty: {
    energy_credits: 15
  },
  venerable: {
    leader_lifespan: 120
  },
  very_strong: {
    army_damage: 40,
    minerals: 10
  },
  decadent: {
    resource_output_without_slaves: -10,
    negative: true
  },
  nonadaptive: {
    habitability: -10,
    negative: true
  },
  repugnant: {
    other_species_happiness_per_pop: -1,
    negative: true
  },
  sedentary: {
    migration_time: 50,
    negative: true
  },
  slow_breeders: {
    growth_time: 15,
    negative: true
  },
  slow_learners: {
    leader_experience_gain: -25,
    negative: true
  },
  solitary: {
    happiness: -5,
    negative: true
  },
  weak: {
    army_damage: -20,
    negative: true
  }
}

module.exports = TraitModifiers
