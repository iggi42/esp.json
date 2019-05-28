let {
    def, subrecord, uint8, opts, float, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('GLOB', 'Global', {
        flags: {
            "6": "Constant"
        },
        members: [
            def('EDID'),
            opts(subrecord('FNAM', uint8('Type', {
                "102": "Float",
                "108": "Long",
                "115": "Short"
            })), {
                "defaultEditValue": "Float"
            }),
            req(subrecord('FLTV', float('Value')))
        ]
    })
};