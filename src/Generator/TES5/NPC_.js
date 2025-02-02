let {
    def, req, uint32, format, int16, 
    div, union, uint16, subrecord, struct, 
    ckFormId, int8, bytes, sortKey, arrayOfSubrecord, 
    uint8, string, array, float, unknown, 
    int32, multiStruct, record
} = require('../helpers');

module.exports = () => {
    record('NPC_', 'Non-Player Character (Actor)', {
        flags: {
            10: 'Unknown 10',
            18: 'Compressed',
            19: 'Unknown 19',
            29: 'Bleedout Override'
        },
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            req(subrecord('ACBS', struct('Configuration', [
                format(uint32('Flags'), {
                    0: 'Female',
                    1: 'Essential',
                    2: 'Is CharGen Face Preset',
                    3: 'Respawn',
                    4: 'Auto-calc stats',
                    5: 'Unique',
                    6: 'Doesn\'t affect stealth meter',
                    7: 'PC Level Mult',
                    8: 'Use Template?',
                    9: 'Unknown 9',
                    10: 'Unknown 10',
                    11: 'Protected',
                    12: 'Unknown 12',
                    13: 'Unknown 13',
                    14: 'Summonable',
                    15: 'Unknown 15',
                    16: 'Doesn\'t bleed',
                    17: 'Unknown 17',
                    18: 'Bleedout Override',
                    19: 'Opposite Gender Anims',
                    20: 'Simple Actor',
                    21: 'looped script?',
                    22: 'Unknown 22',
                    23: 'Unknown 23',
                    24: 'Unknown 24',
                    25: 'Unknown 25',
                    26: 'Unknown 26',
                    27: 'Unknown 27',
                    28: 'looped audio?',
                    29: 'Is Ghost',
                    30: 'Unknown 30',
                    31: 'Invulnerable'
                }),
                int16('Magicka Offset'),
                int16('Stamina Offset'),
                req(union('Level', [
                    int16('Level'),
                    format(int16('Level Mult'), div(1000))
                ])),
                uint16('Calc min level'),
                uint16('Calc max level'),
                uint16('Speed Multiplier'),
                int16('Disposition Base (unused)'),
                format(uint16('Template Flags'), {
                    0: 'Use Traits',
                    1: 'Use Stats',
                    2: 'Use Factions',
                    3: 'Use Spell List',
                    4: 'Use AI Data',
                    5: 'Use AI Packages',
                    6: 'Use Model/Animation?',
                    7: 'Use Base Data',
                    8: 'Use Inventory',
                    9: 'Use Script',
                    10: 'Use Def Pack List',
                    11: 'Use Attack Data',
                    12: 'Use Keywords'
                }),
                int16('Health Offset'),
                uint16('Bleedout Override')
            ]))),
            req(arrayOfSubrecord('Factions', 
                subrecord('SNAM', sortKey([0], struct('Faction', [
                    ckFormId('Faction', ['FACT']),
                    int8('Rank'),
                    bytes('Unused', 3)
                ])))
            )),
            req(subrecord('INAM', ckFormId('Death item', ['LVLI']))),
            req(subrecord('VTCK', ckFormId('Voice', ['VTYP']))),
            subrecord('TPLT', ckFormId('Template', ['LVLN', 'NPC_'])),
            req(subrecord('RNAM', ckFormId('Race', ['RACE']))),
            def('SPCT'),
            def('SPLOs'),
            def('DEST'),
            req(subrecord('WNAM', ckFormId('Worn Armor', ['ARMO']))),
            req(subrecord('ANAM', ckFormId('Far away model', ['ARMO']))),
            req(subrecord('ATKR', ckFormId('Attack Race', ['RACE']))),
            arrayOfSubrecord('Attacks', 
                def('AttackData')
            ),
            req(subrecord('SPOR', ckFormId('Spectator override package list', ['FLST']))),
            req(subrecord('OCOR', ckFormId('Observe dead body override package list', ['FLST']))),
            req(subrecord('GWOR', ckFormId('Guard warn override package list', ['FLST']))),
            req(subrecord('ECOR', ckFormId('Combat override package list', ['FLST']))),
            subrecord('PRKZ', uint32('Perk Count')),
            req(arrayOfSubrecord('Perks', 
                subrecord('PRKR', sortKey([0], struct('Perk', [
                    ckFormId('Perk', ['PERK']),
                    uint8('Rank'),
                    bytes('Unused', 3)
                ])))
            )),
            def('COCT'),
            def('CNTOs'),
            def('AIDT'),
            arrayOfSubrecord('Packages', 
                subrecord('PKID', ckFormId('Package', ['PACK']))
            ),
            def('KSIZ'),
            def('KWDAs'),
            req(subrecord('CNAM', ckFormId('Class', ['CLAS']))),
            def('FULL'),
            subrecord('SHRT', string('Short Name')),
            subrecord('DATA', bytes('Marker')),
            req(subrecord('DNAM', struct('Player Skills', [
                array('Skill Values', 
                    uint8('Skill')
                ),
                array('Skill Offsets', 
                    uint8('Skill')
                ),
                uint16('Health'),
                uint16('Magicka'),
                uint16('Stamina'),
                bytes('Unused', 2),
                float('Far away model distance'),
                uint8('Geared up weapons'),
                bytes('Unused', 3)
            ]))),
            req(arrayOfSubrecord('Head Parts', 
                subrecord('PNAM', ckFormId('Head Part', ['HDPT']))
            )),
            req(subrecord('HCLF', ckFormId('Hair Color', ['CLFM']))),
            req(subrecord('ZNAM', ckFormId('Combat Style', ['CSTY']))),
            req(subrecord('GNAM', ckFormId('Gift Filter', ['FLST']))),
            req(subrecord('NAM5', unknown())),
            req(subrecord('NAM6', float('Height'))),
            req(subrecord('NAM7', float('Weight'))),
            subrecord('NAM8', format(uint32('Sound Level'), def('SoundLevelEnum'))),
            def('CSDTs'),
            req(subrecord('CSCR', ckFormId('Inherits Sounds From', ['NPC_']))),
            req(subrecord('DOFT', ckFormId('Default outfit', ['OTFT']))),
            req(subrecord('SOFT', ckFormId('Sleeping outfit', ['OTFT']))),
            req(subrecord('DPLT', ckFormId('Default Package List', ['FLST']))),
            req(subrecord('CRIF', ckFormId('Crime faction', ['FACT']))),
            req(subrecord('FTST', ckFormId('Head texture', ['TXST']))),
            subrecord('QNAM', struct('Texture lighting', [
                req(float('Red')),
                req(float('Green')),
                req(float('Blue'))
            ])),
            req(subrecord('NAM9', struct('Face morph', [
                float('Nose Long/Short'),
                float('Nose Up/Down'),
                float('Jaw Up/Down'),
                float('Jaw Narrow/Wide'),
                float('Jaw Farward/Back'),
                float('Cheeks Up/Down'),
                float('Cheeks Farward/Back'),
                float('Eyes Up/Down'),
                float('Eyes In/Out'),
                float('Brows Up/Down'),
                float('Brows In/Out'),
                float('Brows Farward/Back'),
                float('Lips Up/Down'),
                float('Lips In/Out'),
                float('Chin Narrow/Wide'),
                float('Chin Up/Down'),
                float('Chin Underbite/Overbite'),
                float('Eyes Farward/Back'),
                float('Unknown')
            ]))),
            subrecord('NAMA', struct('Face parts', [
                uint32('Nose'),
                int32('Unknown'),
                uint32('Eyes'),
                uint32('Mouth')
            ])),
            arrayOfSubrecord('Tint Layers', 
                sortKey([0], multiStruct('Layer', [
                    subrecord('TINI', format(uint16('Tint Index'), def('TintLayerToStr'))),
                    subrecord('TINC', struct('Tint Color', [
                        uint8('Red'),
                        uint8('Green'),
                        uint8('Blue'),
                        uint8('Alpha')
                    ])),
                    subrecord('TINV', format(uint32('Interpolation Value'), div(100))),
                    subrecord('TIAS', int16('Preset'))
                ]))
            )
        ]
    })
};