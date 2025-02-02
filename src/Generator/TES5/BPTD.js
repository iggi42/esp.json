let {
    def, subrecord, string, req, cstring, 
    float, uint8, format, int8, uint16, 
    ckFormId, int32, struct, bytes, arrayOfStruct, 
    sortKey, multiStruct, record
} = require('../helpers');

module.exports = () => {
    record('BPTD', 'Body Part Data', {
        members: [
            def('EDID'),
            def('MODL'),
            req(arrayOfStruct('Body Parts', 
                sortKey([2], multiStruct('Body Part', [
                    req(subrecord('BPTN', string('Part Name'))),
                    req(subrecord('PNAM', cstring('Pose Matching'))),
                    req(subrecord('BPNN', cstring('Part Node'))),
                    req(subrecord('BPNT', cstring('VATS Target'))),
                    req(subrecord('BPNI', cstring('IK Data - Start Node'))),
                    req(subrecord('BPND', struct('', [
                        float('Damage Mult'),
                        format(uint8('Flags'), {
                            0: 'Severable',
                            1: 'IK Data',
                            2: 'IK Data - Biped Data',
                            3: 'Explodable',
                            4: 'IK Data - Is Head',
                            5: 'IK Data - Headtracking',
                            6: 'To Hit Chance - Absolute'
                        }),
                        format(uint8('Part Type'), {
                            0: 'Torso',
                            1: 'Head',
                            2: 'Eye',
                            3: 'LookAt',
                            4: 'Fly Grab',
                            5: 'Saddle'
                        }),
                        uint8('Health Percent'),
                        format(int8('Actor Value'), def('ActorValueEnum')),
                        uint8('To Hit Chance'),
                        uint8('Explodable - Explosion Chance %'),
                        uint16('Explodable - Debris Count'),
                        ckFormId('Explodable - Debris', ['DEBR', 'NULL']),
                        ckFormId('Explodable - Explosion', ['EXPL', 'NULL']),
                        float('Tracking Max Angle'),
                        float('Explodable - Debris Scale'),
                        int32('Severable - Debris Count'),
                        ckFormId('Severable - Debris', ['DEBR', 'NULL']),
                        ckFormId('Severable - Explosion', ['EXPL', 'NULL']),
                        float('Severable - Debris Scale'),
                        struct('Gore Effects Positioning', [
                            struct('Translate', [
                                float('X'),
                                float('Y'),
                                float('Z')
                            ]),
                            struct('Rotation', [
                                req(float('X')),
                                req(float('Y')),
                                req(float('Z'))
                            ])
                        ]),
                        ckFormId('Severable - Impact DataSet', ['IPDS', 'NULL']),
                        ckFormId('Explodable - Impact DataSet', ['IPDS', 'NULL']),
                        uint8('Severable - Decal Count'),
                        uint8('Explodable - Decal Count'),
                        bytes('Unknown', 2),
                        float('Limb Replacement Scale')
                    ]))),
                    req(subrecord('NAM1', cstring('Limb Replacement Model'))),
                    req(subrecord('NAM4', cstring('Gore Effects - Target Bone'))),
                    subrecord('NAM5', bytes('Texture Files Hashes'))
                ]))
            ))
        ]
    })
};