let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('ObjectTypeEnum', 
        {
            0: ' NONE',
            1: 'Activators',
            2: 'Armor',
            3: 'Books',
            4: 'Clothing',
            5: 'Containers',
            6: 'Doors',
            7: 'Ingredients',
            8: 'Lights',
            9: 'Misc',
            10: 'Flora',
            11: 'Furniture',
            12: 'Weapons: Any',
            13: 'Ammo',
            14: 'NPCs',
            15: 'Creatures',
            16: 'Keys',
            17: 'Alchemy',
            18: 'Food',
            19: ' All: Combat Wearable',
            20: ' All: Wearable',
            21: 'Weapons: Ranged',
            22: 'Weapons: Melee',
            23: 'Weapons: NONE',
            24: 'Actor Effects: Any',
            25: 'Actor Effects: Range Target',
            26: 'Actor Effects: Range Touch',
            27: 'Actor Effects: Range Self',
            28: 'Actors: Any'
        }
    );
};