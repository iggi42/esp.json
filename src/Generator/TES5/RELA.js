let {
    def, ckFormId, uint16, format, bytes, 
    uint8, subrecord, struct, record
} = require('../helpers');

module.exports = () => {
    record('RELA', 'Relationship', {
        flags: {
            6: 'Secret'
        },
        members: [
            def('EDID'),
            subrecord('DATA', struct('Data', [
                ckFormId('Parent', ['NPC_', 'NULL']),
                ckFormId('Child', ['NPC_', 'NULL']),
                format(uint16('Rank'), {
                    0: 'Lover',
                    1: 'Ally',
                    2: 'Confidant',
                    3: 'Friend',
                    4: 'Acquaintance',
                    5: 'Rival',
                    6: 'Foe',
                    7: 'Enemy',
                    8: 'Archnemesis'
                }),
                bytes('Unknown', 1),
                format(uint8('Flags'), {
                    0: 'Unknown 1',
                    1: 'Unknown 2',
                    2: 'Unknown 3',
                    3: 'Unknown 4',
                    4: 'Unknown 5',
                    5: 'Unknown 6',
                    6: 'Unknown 7',
                    7: 'Secret'
                }),
                ckFormId('Association Type', ['ASTP', 'NULL'])
            ]))
        ]
    })
};