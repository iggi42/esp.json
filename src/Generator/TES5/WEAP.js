let {
    def, req, subrecord, uint16, ckFormId, 
    cstring, bytes, multiStruct, uint32, float, 
    struct, uint8, format, int32, IsSSE, 
    record
} = require('../helpers');

module.exports = game => {
    record('WEAP', 'Weapon', {
        flags: {
            2: 'Non-Playable'
        },
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('EITM'),
            subrecord('EAMT', uint16('Enchantment Amount')),
            def('DEST'),
            def('ETYP'),
            subrecord('BIDS', ckFormId('Block Bash Impact Data Set', ['IPDS', 'NULL'])),
            subrecord('BAMT', ckFormId('Alternate Block Material', ['MATT', 'NULL'])),
            def('YNAM'),
            def('ZNAM'),
            def('KSIZ'),
            def('KWDAs'),
            def('DESC'),
            multiStruct('Has Scope', [
                subrecord('MOD3', cstring('Model FileName')),
                subrecord('MO3T', bytes('Texture Files Hashes')),
                def('MO3S')
            ]),
            subrecord('NNAM', bytes('Unused')),
            subrecord('INAM', ckFormId('Impact Data Set', ['IPDS', 'NULL'])),
            subrecord('WNAM', ckFormId('1st Person Model Object', ['STAT', 'NULL'])),
            subrecord('SNAM', ckFormId('Attack Sound', ['SNDR'])),
            subrecord('XNAM', ckFormId('Attack Sound 2D', ['SNDR'])),
            subrecord('NAM7', ckFormId('Attack Loop Sound', ['SNDR'])),
            subrecord('TNAM', ckFormId('Attack Fail Sound', ['SNDR'])),
            subrecord('UNAM', ckFormId('Idle Sound', ['SNDR'])),
            subrecord('NAM9', ckFormId('Equip Sound', ['SNDR'])),
            subrecord('NAM8', ckFormId('Unequip Sound', ['SNDR'])),
            subrecord('DATA', struct('Game Data', [
                uint32('Value'),
                float('Weight'),
                uint16('Damage')
            ])),
            subrecord('DNAM', struct('Data', [
                format(uint8('Animation Type'), def('WeaponAnimTypeEnum')),
                bytes('Unused', 3),
                float('Speed'),
                float('Reach'),
                format(uint16('Flags'), {
                    0: 'Ignores Normal Weapon Resistance',
                    1: 'Automatic (unused)',
                    2: 'Has Scope (unused)',
                    3: 'Can\'t Drop',
                    4: 'Hide Backpack (unused)',
                    5: 'Embedded Weapon (unused)',
                    6: 'Don\'t Use 1st Person IS Anim (unused)',
                    7: 'Non-playable'
                }),
                bytes('Unused', 2),
                float('Sight FOV'),
                bytes('Unknown', 4),
                uint8('Base VATS To-Hit Chance'),
                format(uint8('Attack Animation'), def('AttackAnimationEnum')),
                uint8('# Projectiles'),
                uint8('Embedded Weapon AV (unused)'),
                float('Range Min'),
                float('Range Max'),
                format(uint32('On Hit'), {
                    0: 'No formula behaviour',
                    1: 'Dismember only',
                    2: 'Explode only',
                    3: 'No dismember/explode'
                }),
                format(uint32('Flags2'), {
                    0: 'Player Only',
                    1: 'NPCs Use Ammo',
                    2: 'No Jam After Reload (unused)',
                    3: 'Unknown 4',
                    4: 'Minor Crime',
                    5: 'Range Fixed',
                    6: 'Not Used in Normal Combat',
                    7: 'Unknown 8',
                    8: 'Don\'t Use 3rd Person IS Anim (unused)',
                    9: 'Burst Shot',
                    10: 'Rumble - Alternate',
                    11: 'Long Bursts',
                    12: 'Non-hostile',
                    13: 'Bound Weapon'
                }),
                float('Animation Attack Mult'),
                float('Unknown'),
                float('Rumble - Left Motor Strength'),
                float('Rumble - Right Motor Strength'),
                float('Rumble - Duration'),
                bytes('Unknown', 12),
                format(int32('Skill'), def('SkillEnum')),
                bytes('Unknown', 8),
                format(int32('Resist'), def('ActorValueEnum')),
                bytes('Unknown', 4),
                float('Stagger')
            ])),
            IsSSE(game, [
                subrecord('CRDT', struct('Critical Data', [
                    uint16('Damage'),
                    bytes('Unused', 2),
                    float('% Mult'),
                    format(uint8('Flags'), {
                        0: 'On Death'
                    }),
                    bytes('Unused', 7),
                    ckFormId('Effect', ['SPEL', 'NULL']),
                    bytes('Unused', 4)
                ])),
                subrecord('CRDT', struct('Critical Data', [
                    uint16('Damage'),
                    bytes('Unused', 2),
                    float('% Mult'),
                    format(uint8('Flags'), {
                        0: 'On Death'
                    }),
                    bytes('Unused', 3),
                    ckFormId('Effect', ['SPEL', 'NULL'])
                ]))
            ]),
            subrecord('VNAM', format(uint32('Detection Sound Level'), def('SoundlevelEnum'))),
            subrecord('CNAM', ckFormId('Template', ['WEAP']))
        ]
    })
};