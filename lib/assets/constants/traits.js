var exclusions = function () {
  return Array.prototype.map.call(arguments, function (name) {
    return Traits[name];
  });
};

var Traits = {
  adaptive: {
    name: 'Adaptive',
    effects: {
      habitability: 10
    },
    excludes: function () {
      return exclusions('adaptive', 'extremely_adaptive');
    },
    cost: 2,
    description: 'This species is highly adaptive when it comes to foreign environments.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/1/10/Adaptive.png/32px-Adaptive.png'
  },
  agrarian: {
    name: 'Agrarian',
    effects: {
      food_output: 1
    },
    cost: 2,
    description: 'This species has a deep connection to the land and make expert farmers and gardeners.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/c/ca/Agrarian.png/32px-Agrarian.png',
    not_percentage: true
  },
  charismatic: {
    name: 'Charismatic',
    effects: {
      other_species_happiness_per_pop: 1
    },
    excludes: function () {
      return exclusions('repugnant');
    },
    cost: 1,
    description: 'Members of this species have a special charisma and are generally considered pleasant to be around.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/d/d8/Charismatic.png/32px-Charismatic.png'
  },
  communal: {
    name: 'Enduring',
    effects: {
      happiness: 5
    },
    excludes: function () {
      return exclusions('solitary');
    },
    cost: 1,
    description: 'Members of this species are highly communal and quite used to living in close proximity to others.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/b/b5/Communal.png/32px-Communal.png'
  },
  conformists: {
    name: 'Conformists',
    effects: {
      ethics_divergence: -20
    },
    cost: 2,
    description: 'These people always seek consensus and are more likely to conform to the governing ethics.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/d/db/Conformists.png/32px-Conformists.png'
  },
  enduring: {
    name: 'Enduring',
    effects: {
      leader_lifespan: 30
    },
    excludes: function () {
      return exclusions('venerable');
    },
    cost: 1,
    description: 'Lifespans in this species are unusually long.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/9/91/Enduring.png/32px-Enduring.png',
    not_percentage: true
  },
  extremely_adaptive: {
    name: 'Extremely Adaptive',
    effects: {
      habitability: 20
    },
    excludes: function () {
      return exclusions('adaptive', 'nonadaptive');
    },
    cost: 5,
    description: 'This species is remarkably adept at adopting to any foreign environments.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/2/26/Extremely_Adaptive.png/32px-Extremely_Adaptive.png'
  },
  industrious: {
    name: 'Industrious',
    effects: {
      minerals: 15
    },
    cost: 2,
    description: 'Members of this species are known for their diligence and hard-working nature, always going above and beyond.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/2/27/Industrious.png/32px-Industrious.png'
  },
  intelligent: {
    name: 'Intelligent',
    effects: {
      engineering_output: 10,
      physics_output: 10,
      society_output: 10
    },
    cost: 2,
    description: 'This species is highly intelligent and enjoys faster technological progress.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/6/6d/Intelligent.png/32px-Intelligent.png'
  },
  natural_engineers: {
    name: 'Natural Engineers',
    effects: {
      engineering_output: 15
    },
    excludes: function () {
      return exclusions('natural_physicists', 'natural_sociologists');
    },
    cost: 1,
    description: 'Members of this species have a natural inclination towards engineering and the material sciences.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/9/9a/Natural_Engineers.png/32px-Natural_Engineers.png'
  },
  natural_physicists: {
    name: 'Natural Physicists',
    effects: {
      physics_output: 15
    },
    excludes: function () {
      return exclusions('natural_engineers', 'natural_sociologists');
    },
    cost: 1,
    description: 'Members of this species have a natural inclination towards theoretical physics and astral phenomena.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/1/14/Natural_Physicists.png/32px-Natural_Physicists.png'
  },
  natural_sociologists: {
    name: 'Natural Sociologists',
    effects: {
      society_output: 15
    },
    excludes: function () {
      return exclusions('natural_engineers', 'natural_physicists');
    },
    cost: 1,
    description: 'Members of this species have a natural inclination towards sociology and biological studies.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/6/61/Natural_Sociologists.png/32px-Natural_Sociologists.png'
  },
  nomadic: {
    name: 'Nomadic',
    effects: {
      migration_time: -50
    },
    excludes: function () {
      return exclusions('sedentary');
    },
    cost: 1,
    description: 'This species has a nomadic past, and its members often think nothing when relocation to another world.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/b/b8/Nomadic.png/32px-Nomadic.png'
  },
  quick_learners: {
    name: 'Quick Learners',
    effects: {
      leader_experience_gain: 25
    },
    excludes: function () {
      return exclusions('slow_learners');
    },
    cost: 1,
    description: 'Members of this species are quick to learn from experiences.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/2/25/Quick_Learners.png/32px-Quick_Learners.png'
  },
  rapid_breeders: {
    name: 'Rapid Breeders',
    effects: {
      growth_time: -10
    },
    excludes: function () {
      return exclusions('slow_breeders');
    },
    cost: 1,
    description: 'This species reproduces at a very rapid rate, increasing population growth.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/e/ed/Rapid_Breeders.png/32px-Rapid_Breeders.png'
  },
  resilient: {
    name: 'Resilient',
    effects: {
      militia_health: 100,
      bombardment_resistance: 200
    },
    cost: 1,
    description: 'Members of this species are physiologically resilient and will fight like enraged brood mothers to defend their worlds.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/d/d7/Resilient.png/32px-Resilient.png'
  },
  strong: {
    name: 'Strong',
    effects: {
      army_damage: 20,
      minerals: 5
    },
    excludes: function () {
      return exclusions('very_strong', 'weak');
    },
    cost: 1,
    description: 'Members of this species possess great physical strength, making them formidable fighters on the ground.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/e/eb/Strong.png/32px-Strong.png'
  },
  talented: {
    name: 'Talented',
    effects: {
      leader_skill_levels: 1,
    },
    cost: 2,
    description: 'Members of this species are born with a natural aptitude.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/3/3c/Talented.png/32px-Talented.png',
    not_percentage: true
  },
  thrifty: {
    name: 'Thrifty',
    effects: {
      energy_credits: 15
    },
    cost: 2,
    description: 'Members of this species are instinctively economical and are always looking to make a good profit, whatever corners need cutting.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/9/9f/Thrifty.png/32px-Thrifty.png'
  },
  venerable: {
    name: 'Venerable',
    effects: {
      leader_lifespan: 120
    },
    excludes: function () {
      return exclusions('enduring');
    },
    cost: 4,
    description: 'This species can grow to an age that commands dignity and respect.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/8/85/Venerable.png/32px-Venerable.png'
  },
  very_strong: {
    name: 'Very Strong',
    effects: {
      army_damage: 40,
      minerals: 10
    },
    excludes: function () {
      return exclusions('strong', 'weak');
    },
    cost: 4,
    description: 'Members of this species possess a strength that almost defies the laws of physics.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/8/8f/Very_Strong.png/32px-Very_Strong.png'
  },
  decadent: {
    name: 'Decadent',
    effects: {
      resource_output_without_slaves: -10
    },
    cost: -1,
    description: 'This species requires slaves or servants to feel content.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/a/a1/Decadent.png/32px-Decadent.png',
    negative: true
  },
  nonadaptive: {
    name: 'Nonadaptive',
    effects: {
      habitability: -10
    },
    excludes: function () {
      return exclusions('adaptive', 'extremely_adaptive');
    },
    cost: -1,
    description: 'This species does not adapt well to foreign environments.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/5/5f/Nonadaptive.png/32px-Nonadaptive.png',
    negative: true
  },
  repugnant: {
    name: 'Repugnant',
    effects: {
      other_species_happiness_per_pop: -1
    },
    excludes: function () {
      return exclusions('charismatic');
    },
    cost: -1,
    description: 'The physical appearance and customs of this species are considered offensive to most others and few appreciate them as neighbors.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/5/5e/Repugnant.png/32px-Repugnant.png',
    negative: true
  },
  sedentary: {
    name: 'Sedentary',
    effects: {
      migration_time: 50
    },
    excludes: function () {
      return exclusions('nomadic');
    },
    cost: -1,
    description: 'This species has a sedentary past, and its members are reluctant to migrate away from where they grew up.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/7/7c/Sedentary.png/32px-Sedentary.png',
    negative: true
  },
  slow_breeders: {
    name: 'Slow Breeders',
    effects: {
      growth_time: 15
    },
    excludes: function () {
      return exclusions('rapid_breeders');
    },
    cost: -1,
    description: 'This species reproduces at a slow rate, lowering population growth.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/7/79/Slow_Breeders.png/32px-Slow_Breeders.png',
    negative: true
  },
  slow_learners: {
    name: 'Slow Learners',
    effects: {
      leader_experience_gain: -25
    },
    excludes: function () {
      return exclusions('quick_learners');
    },
    cost: -1,
    description: 'Members of this species are slow to learn from their experiences.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/6/69/Slow_Learners.png/32px-Slow_Learners.png',
    negative: true
  },
  solitary: {
    name: 'Solitary',
    effects: {
      happiness: -5
    },
    excludes: function () {
      return exclusions('communal');
    },
    cost: -1,
    description: 'Members of this species tend to be solitary and territorial, often becoming agitated in crowded conditions.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/5/54/Solitary.png/32px-Solitary.png',
    negative: true
  },
  weak: {
    name: 'Weak',
    effects: {
      army_damage: -20
    },
    excludes: function () {
      return exclusions('strong', 'very_strong');
    },
    cost: -1,
    description: 'Members of this species are physically weaker than average, making them poor fighters on the ground.',
    icon_url: 'http://www.stellariswiki.com/images/thumb/e/e9/Weak.png/32px-Weak.png',
    negative: true
  }
};

module.exports = Traits;
