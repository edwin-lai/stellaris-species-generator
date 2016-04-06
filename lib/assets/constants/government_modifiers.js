var GovernmentModifiers = {
  military_dictatorship: {
    fleet_size_limit: [10, 0],
    ship_upkeep: [-10, 1],
    txt1: "Can build an oversized ship",
    txt2: "Admirals/generals are eligible for rulership"
  },
  divine_mandate: {
    slavery_tolerance: [50, 1],
    war_tolerance: [50, 1],
    txt1: "Can build a mausoleum, which grants -10% ethics divergence on the planet on which it is built."
  },
  despotic_hegemony: {
    research_speed: [5, 1],
    survey_speed: [10, 1],
    txt1: "Can build an elite assault army"
  },
  enlightened_monarchy: {
    edict_cost: [-25, 1],
    planetary_edict_duration: [25, 1],
    core_sector_planets: [1, 0],
    txt1: "Can build a special park building"
  },
  despotic_empire: {
    building_cost: [-15, 1],
    slave_mineral_output: [10, 1],
    slave_food_output: [10, 1],
    txt1: "Can build an oversized military station"
  },
  military_junta: {
    ship_cost: [-10, 1],
    ship_upgrade_cost: [-25, 1],
    txt1: "Admirals/generals are eligible for rulership"
  },
  theocratic_oligarchy: {
    ethics_divergence: [-10, 1]
  },
  science_directorate: {
    research_alternatives: [1, 0],
    txt1: "Scientists are eligible for Leadership"
  },
  peaceful_bureaucracy: {
    leader_capacity: [4, 0],
    leader_recruitment_cost: [-15, 1]
  },
  plutocratic_oligarchy: {
    energy_credits: [5, 1],
    minerals: [5, 1]
  },
  military_republic: {
    army_upkeep: [-15, 1],
    ship_upkeep: [-15, 1],
    war_tolerance: [25, 1],
    txt1: "Admirals/generals are eligible for rulership"
  },
  theocratic_republic: {
    ethics_divergence: [-10, 1]
  },
  direct_democracy: {
    core_sector_planets: [1, 0]
  },
  moral_democracy: {
    happiness: [10, 1]
  },
  indirect_democracy: {
    leader_skill_levels: [1, 0],
    leader_recruitment_cost: [10, 1]
  }
};

module.exports = GovernmentModifiers;
