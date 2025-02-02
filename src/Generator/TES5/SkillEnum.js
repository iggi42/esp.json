let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('SkillEnum', 
        {
            0: 'Unknown 1',
            1: 'Unknown 2',
            2: 'Unknown 3',
            3: 'Unknown 4',
            4: 'Unknown 5',
            5: 'Unknown 6',
            6: 'One Handed',
            7: 'Two Handed',
            8: 'Archery',
            9: 'Block',
            10: 'Smithing',
            11: 'Heavy Armor',
            12: 'Light Armor',
            13: 'Pickpocket',
            14: 'Lockpicking',
            15: 'Sneak',
            16: 'Alchemy',
            17: 'Speech',
            18: 'Alteration',
            19: 'Conjuration',
            20: 'Destruction',
            21: 'Illusion',
            22: 'Restoration',
            23: 'Enchanting',
            "-1": 'None'
        }
    );
};