let {
    def, req, subrecord, string, uint8, 
    format, bytes, int32, ckFormId, union, 
    uint32, float, struct, record
} = require('../helpers');

module.exports = () => {
    record('BOOK', 'Book', {
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            req(subrecord('DESC', string('Book Text'))),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('KSIZ'),
            def('KWDAs'),
            req(subrecord('DATA', struct('Data', [
                format(uint8('Flags'), {
                    0: 'Teaches Skill',
                    1: 'Can\'t be Taken',
                    2: 'Teaches Spell',
                    3: 'Unknown 4',
                    4: 'Unknown 5',
                    5: 'Unknown 6',
                    6: 'Unknown 7',
                    7: 'Unknown 8'
                }),
                format(uint8('Type'), {
                    0: 'Book/Tome',
                    255: 'Note/Scroll'
                }),
                bytes('Unused', 2),
                union('Teaches', [
                    format(int32('Skill'), def('SkillEnum')),
                    ckFormId('Spell', ['SPEL', 'NULL'])
                ]),
                uint32('Value'),
                float('Weight')
            ]))),
            subrecord('INAM', ckFormId('Inventory Art', ['STAT'])),
            subrecord('CNAM', string('Description'))
        ]
    })
};