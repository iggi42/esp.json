let {
    addDef, uint32, format
} = require('../helpers');

module.exports = () => {
    addDef('BrowMorphFlags', 
        format(uint32('Brow Morph Flags'), {
            0: 'BrowType0',
            1: 'BrowType1',
            2: 'BrowType2',
            3: 'BrowType3',
            4: 'BrowType4',
            5: 'BrowType5',
            6: 'BrowType6',
            7: 'BrowType7',
            8: 'BrowType8',
            9: 'BrowType9',
            10: 'BrowType10',
            11: 'BrowType11',
            12: 'BrowType12',
            13: 'BrowType13',
            14: 'BrowType14',
            15: 'BrowType15',
            16: 'BrowType16',
            17: 'BrowType17',
            18: 'BrowType18',
            19: 'BrowType19',
            20: 'BrowType20'
        })
    );
};