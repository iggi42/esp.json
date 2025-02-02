let {
    def, req, subrecord, uint8, format, 
    ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('MSTT', 'Moveable Static', {
        flags: {
            8: 'Must Update Anims',
            9: 'Hidden From Local Map',
            15: 'Has Distant LOD',
            16: 'Random Anim Start',
            19: 'Has Currents',
            25: 'Obstacle',
            26: 'NavMesh Generation - Filter',
            27: 'NavMesh Generation - Bounding Box',
            30: 'NavMesh Generation - Ground'
        },
        members: [
            def('EDID'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            subrecord('DATA', format(uint8('Flags'), {
                0: 'On Local Map',
                1: 'Unknown 1',
                2: 'Unknown 2'
            })),
            subrecord('SNAM', ckFormId('Looping Sound', ['SNDR']))
        ]
    })
};