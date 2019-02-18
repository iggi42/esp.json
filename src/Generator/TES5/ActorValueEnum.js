let {
    addDef
} = require('../helpers');

module.exports = game => {
    addDef('ActorValueEnum', 
        {
            '0': 'Aggresion',
            '1': 'Confidence',
            '2': 'Energy',
            '3': 'Morality',
            '4': 'Mood',
            '5': 'Assistance',
            '6': 'One-Handed',
            '7': 'Two-Handed',
            '8': 'Archery',
            '9': 'Block',
            '10': 'Smithing',
            '11': 'Heavy Armor',
            '12': 'Light Armor',
            '13': 'Pickpocket',
            '14': 'Lockpicking',
            '15': 'Sneak',
            '16': 'Alchemy',
            '17': 'Speech',
            '18': 'Alteration',
            '19': 'Conjuration',
            '20': 'Destruction',
            '21': 'Illusion',
            '22': 'Restoration',
            '23': 'Enchanting',
            '24': 'Health',
            '25': 'Magicka',
            '26': 'Stamina',
            '27': 'Heal Rate',
            '28': 'Magicka Rate',
            '29': 'Stamina Rate',
            '30': 'Speed Mult',
            '31': 'Inventory Weight',
            '32': 'Carry Weight',
            '33': 'Critical Chance',
            '34': 'Melee Damage',
            '35': 'Unarmed Damage',
            '36': 'Mass',
            '37': 'Voice Points',
            '38': 'Voice Rate',
            '39': 'Damage Resist',
            '40': 'Poison Resist',
            '41': 'Resist Fire',
            '42': 'Resist Shock',
            '43': 'Resist Frost',
            '44': 'Resist Magic',
            '45': 'Resist Disease',
            '46': 'Unknown 46',
            '47': 'Unknown 47',
            '48': 'Unknown 48',
            '49': 'Unknown 49',
            '50': 'Unknown 50',
            '51': 'Unknown 51',
            '52': 'Unknown 52',
            '53': 'Paralysis',
            '54': 'Invisibility',
            '55': 'Night Eye',
            '56': 'Detect Life Range',
            '57': 'Water Breathing',
            '58': 'Water Walking',
            '59': 'Unknown 59',
            '60': 'Fame',
            '61': 'Infamy',
            '62': 'Jumping Bonus',
            '63': 'Ward Power',
            '64': 'Right Item Charge',
            '65': 'Armor Perks',
            '66': 'Shield Perks',
            '67': 'Ward Deflection',
            '68': 'Variable01',
            '69': 'Variable02',
            '70': 'Variable03',
            '71': 'Variable04',
            '72': 'Variable05',
            '73': 'Variable06',
            '74': 'Variable07',
            '75': 'Variable08',
            '76': 'Variable09',
            '77': 'Variable10',
            '78': 'Bow Speed Bonus',
            '79': 'Favor Active',
            '80': 'Favors Per Day',
            '81': 'Favors Per Day Timer',
            '82': 'Left Item Charge',
            '83': 'Absorb Chance',
            '84': 'Blindness',
            '85': 'Weapon Speed Mult',
            '86': 'Shout Recovery Mult',
            '87': 'Bow Stagger Bonus',
            '88': 'Telekinesis',
            '89': 'Favor Points Bonus',
            '90': 'Last Bribed Intimidated',
            '91': 'Last Flattered',
            '92': 'Movement Noise Mult',
            '93': 'Bypass Vendor Stolen Check',
            '94': 'Bypass Vendor Keyword Check',
            '95': 'Waiting For Player',
            '96': 'One-Handed Modifier',
            '97': 'Two-Handed Modifier',
            '98': 'Marksman Modifier',
            '99': 'Block Modifier',
            '100': 'Smithing Modifier',
            '101': 'Heavy Armor Modifier',
            '102': 'Light Armor Modifier',
            '103': 'Pickpocket Modifier',
            '104': 'Lockpicking Modifier',
            '105': 'Sneaking Modifier',
            '106': 'Alchemy Modifier',
            '107': 'Speechcraft Modifier',
            '108': 'Alteration Modifier',
            '109': 'Conjuration Modifier',
            '110': 'Destruction Modifier',
            '111': 'Illusion Modifier',
            '112': 'Restoration Modifier',
            '113': 'Enchanting Modifier',
            '114': 'One-Handed Skill Advance',
            '115': 'Two-Handed Skill Advance',
            '116': 'Marksman Skill Advance',
            '117': 'Block Skill Advance',
            '118': 'Smithing Skill Advance',
            '119': 'Heavy Armor Skill Advance',
            '120': 'Light Armor Skill Advance',
            '121': 'Pickpocket Skill Advance',
            '122': 'Lockpicking Skill Advance',
            '123': 'Sneaking Skill Advance',
            '124': 'Alchemy Skill Advance',
            '125': 'Speechcraft Skill Advance',
            '126': 'Alteration Skill Advance',
            '127': 'Conjuration Skill Advance',
            '128': 'Destruction Skill Advance',
            '129': 'Illusion Skill Advance',
            '130': 'Restoration Skill Advance',
            '131': 'Enchanting Skill Advance',
            '132': 'Left Weapon Speed Multiply',
            '133': 'Dragon Souls',
            '134': 'Combat Health Regen Multiply',
            '135': 'One-Handed Power Modifier',
            '136': 'Two-Handed Power Modifier',
            '137': 'Marksman Power Modifier',
            '138': 'Block Power Modifier',
            '139': 'Smithing Power Modifier',
            '140': 'Heavy Armor Power Modifier',
            '141': 'Light Armor Power Modifier',
            '142': 'Pickpocket Power Modifier',
            '143': 'Lockpicking Power Modifier',
            '144': 'Sneaking Power Modifier',
            '145': 'Alchemy Power Modifier',
            '146': 'Speechcraft Power Modifier',
            '147': 'Alteration Power Modifier',
            '148': 'Conjuration Power Modifier',
            '149': 'Destruction Power Modifier',
            '150': 'Illusion Power Modifier',
            '151': 'Restoration Power Modifier',
            '152': 'Enchanting Power Modifier',
            '153': 'Dragon Rend',
            '154': 'Attack Damage Mult',
            '155': 'Heal Rate Mult',
            '156': 'Magicka Rate Mult',
            '157': 'Stamina Rate Mult',
            '158': 'Werewolf Perks',
            '159': 'Vampire Perks',
            '160': 'Grab Actor Offset',
            '161': 'Grabbed',
            '162': 'Unknown 162',
            '163': 'Reflect Damage',
            '-1': 'None',
        }
    );
};