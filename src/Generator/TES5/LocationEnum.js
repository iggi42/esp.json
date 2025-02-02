let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('LocationEnum', 
        {
            0: 'Near reference',
            1: 'In cell',
            2: 'Near package start location',
            3: 'Near editor location',
            4: 'Object ID',
            5: 'Object Type',
            6: 'Near linked reference',
            7: 'At package location',
            8: 'Alias (reference)',
            9: 'Alias (location)',
            10: 'Unknown 10',
            11: 'Unknown 11',
            12: 'Near self'
        }
    );
};