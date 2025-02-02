let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('VatsValueFunctionEnum', 
        {
            0: 'Weapon Is',
            1: 'Weapon In List',
            2: 'Target Is',
            3: 'Target In List',
            4: 'Target Distance',
            5: 'Target Part',
            6: 'VATS Action',
            7: 'Is Success',
            8: 'Is Critical',
            9: 'Critical Effect Is',
            10: 'Critical Effect In List',
            11: 'Is Fatal',
            12: 'Explode Part',
            13: 'Dismember Part',
            14: 'Cripple Part',
            15: 'Weapon Type Is',
            16: 'Is Stranger',
            17: 'Is Paralyzing Palm',
            18: 'Projectile Type Is',
            19: 'Delivery Type Is',
            20: 'Casting Type Is'
        }
    );
};