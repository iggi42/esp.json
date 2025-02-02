let {
    def, subrecord, bytes, arrayOfSubrecord, float, 
    struct, uint32, format, uint8, req, 
    IsSSE, record
} = require('../helpers');

module.exports = game => {
    record('MATO', 'Material Object', {
        members: [
            def('EDID'),
            def('MODL'),
            arrayOfSubrecord('Property Data', 
                subrecord('DNAM', bytes('Data'))
            ),
            IsSSE(game, [
                req(subrecord('DATA', struct('Directional Material Data', [
                    float('Falloff Scale'),
                    float('Falloff Bias'),
                    float('Noise UV Scale'),
                    float('Material UV Scale'),
                    struct('Projection Vector', [
                        float('X'),
                        float('Y'),
                        float('Z')
                    ]),
                    float('Normal Dampener'),
                    def('FloatColors', { name: 'Single Pass Color' }),
                    format(uint32('Flags'), {
                        0: 'Single Pass'
                    }),
                    format(uint8('Flags'), {
                        0: 'Snow'
                    }),
                    bytes('Unused', 3)
                ]))),
                req(subrecord('DATA', struct('Directional Material Data', [
                    float('Falloff Scale'),
                    float('Falloff Bias'),
                    float('Noise UV Scale'),
                    float('Material UV Scale'),
                    struct('Projection Vector', [
                        float('X'),
                        float('Y'),
                        float('Z')
                    ]),
                    float('Normal Dampener'),
                    def('FloatColors', { name: 'Single Pass Color' }),
                    format(uint32('Flags'), {
                        0: 'Single Pass'
                    })
                ])))
            ])
        ]
    })
};