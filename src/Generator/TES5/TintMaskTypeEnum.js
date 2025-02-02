let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('TintMaskTypeEnum', 
        {
            0: 'None',
            1: 'Lip Color',
            2: 'Cheek Color',
            3: 'Eyeliner',
            4: 'EyeSocket Upper',
            5: 'EyeSocket Lower',
            6: 'Skin Tone',
            7: 'Paint',
            8: 'Laugh Lines',
            9: 'Cheek Color Lower',
            10: 'Nose',
            11: 'Chin',
            12: 'Neck',
            13: 'Forehead',
            14: 'Dirt',
            15: 'Unknown 16'
        }
    );
};