var exclusions = function () {
  return Array.prototype.map.call(arguments, function (name) {
    return Traits[name]
  })
}

var Traits = {
  adaptive: {
    name: 'Adaptive',
    effects: {
      habitability: 10
    },
    excludes: function () {
      return exclusions('adaptive', 'extremely_adaptive')
    },
    cost: 2,
    description: '',
    icon_url: ''
  },
  agrarian: {
    name: 'Agrarian',
    effects: {
      food_output: 1
    },
    cost: 2,
    description: '',
    icon_url: ''
  },
  charismatic: {
    name: 'Conformists',
    effects: {
      other_species_happiness_per_pop: 1
    },
    excludes: function () {
      return exclusions('repugnant')
    },
    cost: 1,
    description: '',
    icon_url: ''
  },
  communal: {
    name: 'Enduring',
    effects: {
      happiness: 5
    },
    excludes: function () {
      return exclusions('solitary')
    },
    cost: 1,
    description: '',
    icon_url: ''
  },
  conformists: {
    name: 'Conformists',
    effects: {
      ethics_divergence: -20
    },
    cost: 2,
    description: '',
    icon_url: ''
  },
  enduring: {
    name: 'Enduring',
    effects: {
      leader_lifespan: 30
    },
    excludes: function () {
      return exclusions('venerable')
    },
    cost: 1,
    description: '',
    icon_url: ''
  },
  extremely_adaptive: {
    name: 'Extremely Adaptive',
    effects: {
      habitability: 20
    },
    excludes: function () {
      return exclusions('adaptive', 'nonadaptive')
    },
    cost: 5,
    description: '',
    icon_url: ''
  },
  industrious: {
    name: 'Industrious',
    effects: {
      minerals: 15
    },
    cost: 2,
    description: '',
    icon_url: ''
  },
  intelligent: {
    name: 'Intelligent',
    effects: {
      engineering_output: 10,
      physics_output: 10,
      society_output: 10
    },
    cost: 2,
    description: '',
    icon_url: ''
  },
  natural_engineers: {
    name: 'Natural Engineers',
    effects: {
      engineering_output: 15
    },
    excludes: function () {
      return exclusions('natural_physicists', 'natural_sociologists')
    },
    cost: 1,
    description: '',
    icon_url: ''
  },
  natural_physicists: {
    name: 'Natural Physicists',
    effects: {
      physics_output: 15
    },
    excludes: function () {
      return exclusions('natural_engineers', 'natural_sociologists')
    },
    cost: 1,
    description: '',
    icon_url: ''
  },
  natural_sociologists: {
    name: 'Natural Sociologists',
    effects: {
      society_output: 15
    },
    excludes: function () {
      return exclusions('natural_engineers', 'natural_physicists')
    },
    cost: 1,
    description: '',
    icon_url: ''
  },
  nomadic: {
    name: 'Nomadic',
    effects: {
      migration_time: -50
    },
    excludes: function () {
      return exclusions('sedentary')
    },
    cost: 1,
    description: '',
    icon_url: ''
  },
  quick_learners: {
    name: 'Quick Learners',
    effects: {
      leader_experience_gain: 25
    },
    excludes: function () {
      return exclusions('slow_learners')
    },
    cost: 1,
    description: '',
    icon_url: ''
  },
  rapid_breeders: {
    name: 'Rapid Breeders',
    effects: {
      growth_time: -10
    },
    excludes: function () {
      return exclusions('slow_breeders')
    },
    cost: 1,
    description: '',
    icon_url: ''
  },
  resilient: {
    name: 'Resilient',
    effects: {
      militia_health: 100,
      bombardment_resistance: 200
    },
    cost: 1,
    description: '',
    icon_url: ''
  },
  strong: {
    name: 'Strong',
    effects: {
      army_damage: 20,
      minerals: 5
    },
    excludes: function () {
      return exclusions('very_strong', 'weak')
    },
    cost: 1,
    description: '',
    icon_url: ''
  },
  talented: {
    name: 'Talented',
    effects: {
      leader_skill_levels: 1
    },
    cost: 2,
    description: '',
    icon_url: ''
  },
  thrifty: {
    name: 'Thrifty',
    effects: {
      energy_credits: 15
    },
    cost: 2,
    description: '',
    icon_url: ''
  },
  venerable: {
    name: 'Venerable',
    effects: {
      leader_lifespan: 120
    },
    excludes: function () {
      return exclusions('enduring')
    },
    cost: 4,
    description: '',
    icon_url: ''
  },
  very_strong: {
    name: 'Very Strong',
    effects: {
      army_damage: 40,
      minerals: 10
    },
    excludes: function () {
      return exclusions('strong', 'weak')
    },
    cost: 4,
    description: '',
    icon_url: ''
  },
  decadent: {
    name: 'Decadent',
    effects: {
      resource_output_without_slaves: -10
    },
    cost: -1,
    description: '',
    icon_url: '',
    negative: true
  },
  nonadaptive: {
    name: 'Nonadaptive',
    effects: {
      habitability: -10
    },
    excludes: function () {
      return exclusions('adaptive', 'extremely_adaptive')
    },
    cost: -1,
    description: '',
    icon_url: '',
    negative: true
  },
  repugnant: {
    name: 'Repugnant',
    effects: {
      other_species_happiness_per_pop: -1
    },
    excludes: function () {
      return exclusions('charismatic')
    },
    cost: -1,
    description: '',
    icon_url: '',
    negative: true
  },
  sedentary: {
    name: 'Sedentary',
    effects: {
      migration_time: 50
    },
    excludes: function () {
      return exclusions('nomadic')
    },
    cost: -1,
    description: '',
    icon_url: '',
    negative: true
  },
  slow_breeders: {
    name: 'Slow Breeders',
    effects: {
      growth_time: 15
    },
    excludes: function () {
      return exclusions('rapid_breeders')
    },
    cost: -1,
    description: '',
    icon_url: '',
    negative: true
  },
  slow_learners: {
    name: 'Slow Learners',
    effects: {
      leader_experience_gain: -25
    },
    excludes: function () {
      return exclusions('quick_learners')
    },
    cost: -1,
    description: '',
    icon_url: '',
    negative: true
  },
  solitary: {
    name: 'Solitary',
    effects: {
      happiness: -5
    },
    excludes: function () {
      return exclusions('communal')
    },
    cost: -1,
    description: '',
    icon_url: '',
    negative: true
  },
  weak: {
    name: 'Weak',
    effects: {
      army_damage: -20
    },
    excludes: function () {
      return exclusions('strong', 'very_strong')
    },
    cost: -1,
    description: '',
    icon_url: '',
    negative: true
  }
}

module.exports = Traits
