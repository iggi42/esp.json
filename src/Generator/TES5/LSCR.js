let {
    def, subrecord, ckFormId, req, float, 
    int16, struct, string, record
} = require('../helpers');

module.exports = () => {
    record('LSCR', 'Load Screen', {
        flags: {
            "10": "Displays In Main Menu"
        },
        members: [
            def('EDID'),
            def('ICON'),
            def('DESCReq'),
            def('CTDAs'),
            req(subrecord('NNAM', ckFormId('Loading Screen NIF', ['STAT', 'NULL']))),
            subrecord('SNAM', float('Initial Scale')),
            subrecord('RNAM', struct('Initial Rotation', [
                int16('X'),
                int16('Y'),
                int16('Z')
            ])),
            subrecord('ONAM', struct('Rotation Offset Constraints', [
                int16('Min'),
                int16('Max')
            ])),
            subrecord('XNAM', struct('Initial Translation Offset', [
                float('X'),
                float('Y'),
                float('Z')
            ])),
            req(subrecord('MOD2', string('Camera Path')))
        ]
    })
};