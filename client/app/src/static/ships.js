const ships = [
  'Abaddon',
  'Abaddon Kador Edition',
  'Abaddon Tash-Murkon Edition',
  'Amarr Media Shuttle',
  'Amarr Police Frigate',
  'Amarr Shuttle',
  'Apocalypse',
  'Apocalypse Blood Raider Edition',
  'Apocalypse Imperial Issue',
  'Apocalypse Kador Edition',
  'Apocalypse Navy Issue',
  'Apocalypse Tash-Murkon Edition',
  'Apotheosis',
  'Arbitrator',
  'Armageddon',
  'Armageddon Imperial Issue',
  'Armageddon Navy Issue',
  'Ashimmu',
  'Astero',
  'Atron',
  'Augoror',
  'Augoror Navy Issue',
  'Avatar',
  'Badger',
  'Bantam',
  'Barghest',
  'Bellicose',
  'Bestower',
  'Bestower Tash-Murkon Edition',
  'Bhaalgorn',
  'Blackbird',
  'Breacher',
  'Burst',
  'Caldari Media Shuttle',
  'Caldari Navy Hookbill',
  'Caldari Shuttle',
  'Capsule',
  'Capsule - Genolution \'Auroral\' 197-variant',
  'Caracal',
  'Caracal Navy Issue',
  'Caracal Nugoeihuvi Edition',
  'Caracal Wiyrkomi Edition',
  'Celestis',
  'Civilian Amarr Shuttle',
  'Civilian Caldari Shuttle',
  'Civilian Gallente Shuttle',
  'Civilian Minmatar Shuttle',
  'Cockroach',
  'Concord Army Battleship',
  'Concord Army Frigate',
  'Concord Police Battleship',
  'Concord Police Cruiser',
  'Concord Police Frigate',
  'Concord Special Ops Battleship',
  'Concord Special Ops Frigate',
  'Concord SWAT Battleship',
  'Concord SWAT Frigate',
  'Condor',
  'Council Diplomatic Shuttle',
  'Crucifier',
  'Crucifier Navy Issue',
  'Cruor',
  'Cynabal',
  'Damavik',
  'Daredevil',
  'Devourer',
  'Dominix',
  'Dominix Navy Issue',
  'Dominix Quafe Edition',
  'Dramiel',
  'Echelon',
  'Epithal',
  'Erebus',
  'Executioner',
  'Exequror',
  'Exequror Navy Issue',
  'Federation Navy Comet',
  'Fury',
  'Gallente Media Shuttle',
  'Gallente Police Ship',
  'Gallente Shuttle',
  'Garmur',
  'Gila',
  'Gold Magnate',
  'Goru\'s Shuttle',
  'Griffin',
  'Griffin Navy Issue',
  'Guardian-Vexor',
  'Guristas Shuttle',
  'Heron',
  'Hoarder',
  'Hyperion',
  'Hyperion Aliastra Edition',
  'Hyperion Inner Zone Shipping Edition',
  'Imicus',
  'Immovable Enigma',
  'Imperial Navy Slicer',
  'Incursus',
  'Incursus Aliastra Edition',
  'Incursus Inner Zone Shipping Edition',
  'Inner Zone Shipping Imicus',
  'Inquisitor',
  'InterBus Shuttle',
  'Iteron Inner Zone Shipping Edition',
  'Iteron Mark V',
  'Kestrel',
  'Khanid Navy Frigate',
  'Komodo',
  'Kryos',
  'Leopard',
  'Leshak',
  'Leviathan',
  'Lynx',
  'Machariel',
  'Maelstrom',
  'Maelstrom Krusual Edition',
  'Maelstrom Nefantar Edition',
  'Magnate',
  'Maller',
  'Mammoth',
  'Mammoth Nefantar Edition',
  'Maulus',
  'Maulus Navy Issue',
  'Medusa',
  'Megathron',
  'Megathron Federate Issue',
  'Megathron Inner Zone Shipping Edition',
  'Megathron Navy Issue',
  'Megathron Police Edition',
  'Megathron Quafe Edition',
  'Merlin',
  'Merlin Nugoeihuvi Edition',
  'Merlin Wiyrkomi Edition',
  'Miasmos',
  'Miasmos Amastris Edition',
  'Miasmos Quafe Ultra Edition',
  'Miasmos Quafe Ultramarine Edition',
  'Minmatar Media Shuttle',
  'Minmatar Peacekeeper Ship',
  'Minmatar Shuttle',
  'Moa',
  'Molok',
  'Mordus Frigate',
  'Navitas',
  'Nereus',
  'Nestor',
  'Nightmare',
  'Noctis',
  'Omen',
  'Omen Kador Edition',
  'Omen Navy Issue',
  'Omen Tash-Murkon Edition',
  'Opux Dragoon Yacht',
  'Opux Luxury Yacht',
  'Orthrus',
  'Osprey',
  'Osprey Navy Issue',
  'Phantasm',
  'Police Pursuit Comet',
  'Praxis',
  'Primae',
  'Probe',
  'Punisher',
  'Punisher Kador Edition',
  'Punisher Tash-Murkon Edition',
  'Ragnarok',
  'Rattlesnake',
  'Rattlesnake Victory Edition',
  'Raven',
  'Raven Guristas Edition',
  'Raven Kaalakiota Edition',
  'Raven Navy Issue',
  'Raven Nugoeihuvi Edition',
  'Raven State Issue',
  'Republic Fleet Firetail',
  'Rifter',
  'Rifter Krusual Edition',
  'Rifter Nefantar Edition',
  'Rokh',
  'Rokh Nugoeihuvi Edition',
  'Rokh Wiyrkomi Edition',
  'Rupture',
  'Sarum Magnate',
  'Scorpion',
  'Scorpion Ishukone Watch',
  'Scorpion Navy Issue',
  'Scythe',
  'Scythe Fleet Issue',
  'Sigil',
  'Silver Magnate',
  'Slasher',
  'SOCT 1',
  'SOCT 2',
  'Stabber',
  'Stabber Fleet Issue',
  'Stabber Krusual Edition',
  'Stabber Nefantar Edition',
  'Stratios',
  'Stratios Emergency Responder',
  'Succubus',
  'Sukuuvestaa Heron',
  'Swordspine',
  'Tash-Murkon Magnate',
  'Tayra',
  'Tayra Wiyrkomi Edition',
  'Tempest',
  'Tempest Fleet Issue',
  'Tempest Justice Edition',
  'Tempest Krusual Edition',
  'Tempest Nefantar Edition',
  'Tempest Tribal Issue',
  'Thorax',
  'Thorax Aliastra Edition',
  'Thorax Inner Zone Shipping Edition',
  'Tormentor',
  'Tristan',
  'Tristan Quafe Edition',
  'Typhoon',
  'Typhoon Fleet Issue',
  'Vanquisher',
  'Vedmak',
  'Venture',
  'Vexor',
  'Vexor Navy Issue',
  'Vexor Quafe Edition',
  'Vherokior Probe',
  'Victorieux Luxury Yacht',
  'Vigil',
  'Vigil Fleet Issue',
  'Vigilant',
  'Vindicator',
  'Worm',
  'Wreathe'
];

export default ships;
