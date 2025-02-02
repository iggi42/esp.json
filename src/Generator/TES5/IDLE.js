let {
    def, subrecord, cstring, ckFormId, array, 
    uint8, struct, format, uint16, req, 
    record
} = require('../helpers');

module.exports = () => {
    record('IDLE', 'Idle Animation', {
        members: [
            def('EDID'),
            def('CTDAs'),
            subrecord('DNAM', cstring('FileName')),
            subrecord('ENAM', cstring('Animation Event')),
            subrecord('ANAM', array('Related Idle Animations', 
                ckFormId('Related Idle Animation', [
                    'AACT',    'IDLE',    'NULL'
                ])
            )),
            req(subrecord('DATA', struct('Data (unused)', [
                struct('Looping seconds (both 255 forever)', [
                    uint8('Min'),
                    uint8('Max')
                ]),
                format(uint8('Flags'), {
                    0: 'Parent',
                    1: 'Sequence',
                    2: 'No Attacking',
                    3: 'Blocking'
                }),
                uint8('Animation Group Section'),
                uint16('Replay Delay')
            ])))
        ]
    })
};