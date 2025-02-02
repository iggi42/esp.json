let {
    addDef, def, uint8, format, bytes, 
    uint32, subrecord, struct, req
} = require('../helpers');

module.exports = () => {
    addDef('BODT', 
        req(subrecord('BODT', struct('Body Template', [
            def('FirstPersonFlagsU32'),
            format(uint8('General Flags'), {
                0: '(ARMA)Modulates Voice',
                1: 'Unknown 2',
                2: 'Unknown 3',
                3: 'Unknown 4',
                4: '(ARMO)Non-Playable',
                5: 'Unknown 6',
                6: 'Unknown 7',
                7: 'Unknown 8'
            }),
            bytes('Unused', 3),
            format(uint32('Armor Type'), def('ArmorTypeEnum'))
        ])))
    );
};