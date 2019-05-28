let {
    def, ckFormId, float, subrecord, struct, 
    arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('SHOU', 'Shout', {
        flags: {
            "7": "Treat spells as powers"
        },
        members: [
            def('EDID'),
            def('FULL'),
            def('MDOB'),
            def('DESC'),
            arrayOfSubrecord('Words of Power', undefined)
        ]
    })
};