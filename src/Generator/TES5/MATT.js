let {
    def, subrecord, ckFormId, cstring, float, 
    req, struct, uint32, format, record
} = require('../helpers');

module.exports = () => {
    record('MATT', 'Material Type', {
        members: [
            def('EDID'),
            subrecord('PNAM', ckFormId('Material Parent', ['MATT', 'NULL'])),
            subrecord('MNAM', cstring('Material Name')),
            subrecord('CNAM', struct('Havok Display Color', [
                req(float('Red')),
                req(float('Green')),
                req(float('Blue'))
            ])),
            subrecord('BNAM', float('Buoyancy')),
            subrecord('FNAM', format(uint32('Flags'), {
                0: 'Stair Material',
                1: 'Arrows Stick'
            })),
            subrecord('HNAM', ckFormId('Havok Impact Data Set', ['IPDS', 'NULL']))
        ]
    })
};