let {
    addDef, uint32, format
} = require('../helpers');

module.exports = () => {
    addDef('NoseMorphFlags', 
        format(uint32('Nose Morph Flags'), {
            0: 'NoseType0',
            1: 'NoseType1',
            2: 'NoseType2',
            3: 'NoseType3',
            4: 'NoseType4',
            5: 'NoseType5',
            6: 'NoseType6',
            7: 'NoseType7',
            8: 'NoseType8',
            9: 'NoseType9',
            10: 'NoseType10',
            11: 'NoseType11',
            12: 'NoseType12',
            13: 'NoseType13',
            14: 'NoseType14',
            15: 'NoseType15',
            16: 'NoseType16',
            17: 'NoseType17',
            18: 'NoseType18',
            19: 'NoseType19',
            20: 'NoseType20',
            21: 'NoseType21',
            22: 'NoseType22',
            23: 'NoseType23',
            24: 'NoseType24',
            25: 'NoseType25',
            26: 'NoseType26',
            27: 'NoseType27',
            28: 'NoseType28',
            29: 'NoseType29',
            30: 'NoseType30',
            31: 'NoseType31'
        })
    );
};