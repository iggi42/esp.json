let {
    def, subrecord, ckFormId, arrayOfSubrecord, req, 
    uint32, format, struct, array, string, 
    record
} = require('../helpers');

module.exports = () => {
    record('MGEF', 'Magic Effect', {
        members: [
            def('EDID'),
            def('VMAD'),
            def('FULL'),
            def('MDOB'),
            def('KSIZ'),
            def('KWDAs'),
            def('MGEFData'),
            req(arrayOfSubrecord('Counter Effects', 
                subrecord('ESCE', ckFormId('Effect', ['MGEF']))
            )),
            subrecord('SNDD', array('Sounds', 
                struct('', [
                    format(uint32('Type'), {
                        0: 'Sheathe/Draw',
                        1: 'Charge',
                        2: 'Ready',
                        3: 'Release',
                        4: 'Concentration Cast Loop',
                        5: 'On Hit'
                    }),
                    ckFormId('Sound', ['SNDR'])
                ])
            )),
            subrecord('DNAM', string('Magic Item Description')),
            def('CTDAs')
        ]
    })
};