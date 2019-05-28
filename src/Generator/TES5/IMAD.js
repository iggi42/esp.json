let {
    def, uint32, float, struct, subrecord, 
    array, multiStruct, unknown, record
} = require('../helpers');

module.exports = () => {
    record('IMAD', 'Image Space Adapter', {
        members: [
            def('EDID'),
            subrecord('DNAM', struct('Data Count', [
                uint32('Flags', {
                    "0": "Animatable"
                }),
                float('Duration'),
                struct('HDR', [
                    uint32('Eye Adapt Speed Mult'),
                    uint32('Eye Adapt Speed Add'),
                    uint32('Bloom Blur Radius Mult'),
                    uint32('Bloom Blur Radius Add'),
                    uint32('Bloom Threshold Mult'),
                    uint32('Bloom Threshold Add'),
                    uint32('Bloom Scale Mult'),
                    uint32('Bloom Scale Add'),
                    uint32('Target Lum Min Mult'),
                    uint32('Target Lum Min Add'),
                    uint32('Target Lum Max Mult'),
                    uint32('Target Lum Max Add'),
                    uint32('Sunlight Scale Mult'),
                    uint32('Sunlight Scale Add'),
                    uint32('Sky Scale Mult'),
                    uint32('Sky Scale Add')
                ]),
                uint32('Unknown08 Mult'),
                uint32('Unknown48 Add'),
                uint32('Unknown09 Mult'),
                uint32('Unknown49 Add'),
                uint32('Unknown0A Mult'),
                uint32('Unknown4A Add'),
                uint32('Unknown0B Mult'),
                uint32('Unknown4B Add'),
                uint32('Unknown0C Mult'),
                uint32('Unknown4C Add'),
                uint32('Unknown0D Mult'),
                uint32('Unknown4D Add'),
                uint32('Unknown0E Mult'),
                uint32('Unknown4E Add'),
                uint32('Unknown0F Mult'),
                uint32('Unknown4F Add'),
                uint32('Unknown10 Mult'),
                uint32('Unknown50 Add'),
                struct('Cinematic', [
                    uint32('Saturation Mult'),
                    uint32('Saturation Add'),
                    uint32('Brightness Mult'),
                    uint32('Brightness Add'),
                    uint32('Contrast Mult'),
                    uint32('Contrast Add')
                ]),
                uint32('Unknown14 Mult'),
                uint32('Unknown54 Add'),
                uint32('Tint Color'),
                uint32('Blur Radius'),
                uint32('Double Vision Strength'),
                uint32('Radial Blur Strength'),
                uint32('Radial Blur Ramp Up'),
                uint32('Radial Blur Start'),
                uint32('Radial Blur Flags', {
                    "0": "Use Target"
                }),
                float('Radial Blur Center X'),
                float('Radial Blur Center Y'),
                uint32('DoF Strength'),
                uint32('DoF Distance'),
                uint32('DoF Range'),
                uint32('DoF Flags', {
                    "0": "Use Target",
                    "1": "Unknown 2",
                    "2": "Unknown 3",
                    "3": "Unknown 4",
                    "4": "Unknown 5",
                    "5": "Unknown 6",
                    "6": "Unknown 7",
                    "7": "Unknown 8",
                    "8": "Mode - Front",
                    "9": "Mode - Back",
                    "10": "No Sky",
                    "11": "Blur Radius Bit 2",
                    "12": "Blur Radius Bit 1",
                    "13": "Blur Radius Bit 0"
                }),
                uint32('Radial Blur Ramp Down'),
                uint32('Radial Blur Down Start'),
                uint32('Fade Color'),
                uint32('Motion Blur Strength')
            ])),
            subrecord('BNAM', array('Blur Radius', def('TimeInterpolator'), undefined)),
            subrecord('VNAM', array('Double Vision Strength', def('TimeInterpolator'), undefined)),
            subrecord('TNAM', array('Tint Color', def('ColorInterpolator'), undefined)),
            subrecord('NAM3', array('Fade Color', def('ColorInterpolator'), undefined)),
            subrecord('RNAM', array('Radial Blur Strength', def('TimeInterpolator'), undefined)),
            subrecord('SNAM', array('Radial Blur Ramp Up', def('TimeInterpolator'), undefined)),
            subrecord('UNAM', array('Radial Blur Start', def('TimeInterpolator'), undefined)),
            subrecord('NAM1', array('Radial Blur Ramp Down', def('TimeInterpolator'), undefined)),
            subrecord('NAM2', array('Radial Blur Down Start', def('TimeInterpolator'), undefined)),
            subrecord('WNAM', array('DoF Strength', def('TimeInterpolator'), undefined)),
            subrecord('XNAM', array('DoF Distance', def('TimeInterpolator'), undefined)),
            subrecord('YNAM', array('DoF Range', def('TimeInterpolator'), undefined)),
            subrecord('NAM4', array('Motion Blur Strength', def('TimeInterpolator'), undefined)),
            multiStruct(HDR, [
                subrecord('_00_IAD', array('Eye Adapt Speed Mult', def('TimeInterpolator'), undefined)),
                subrecord('_40_IAD', array('Eye Adapt Speed Add', def('TimeInterpolator'), undefined)),
                subrecord('_01_IAD', array('Bloom Blur Radius Mult', def('TimeInterpolator'), undefined)),
                subrecord('_41_IAD', array('Bloom Blur Radius Add', def('TimeInterpolator'), undefined)),
                subrecord('_02_IAD', array('Bloom Threshold Mult', def('TimeInterpolator'), undefined)),
                subrecord('_42_IAD', array('Bloom Threshold Add', def('TimeInterpolator'), undefined)),
                subrecord('_03_IAD', array('Bloom Scale Mult', def('TimeInterpolator'), undefined)),
                subrecord('_43_IAD', array('Bloom Scale Add', def('TimeInterpolator'), undefined)),
                subrecord('_04_IAD', array('Target Lum Min Mult', def('TimeInterpolator'), undefined)),
                subrecord('_44_IAD', array('Target Lum Min Add', def('TimeInterpolator'), undefined)),
                subrecord('_05_IAD', array('Target Lum Max Mult', def('TimeInterpolator'), undefined)),
                subrecord('_45_IAD', array('Target Lum Max Add', def('TimeInterpolator'), undefined)),
                subrecord('_06_IAD', array('Sunlight Scale Mult', def('TimeInterpolator'), undefined)),
                subrecord('_46_IAD', array('Sunlight Scale Add', def('TimeInterpolator'), undefined)),
                subrecord('_07_IAD', array('Sky Scale Mult', def('TimeInterpolator'), undefined)),
                subrecord('_47_IAD', array('Sky Scale Add', def('TimeInterpolator'), undefined))
            ]),
            subrecord('_08_IAD', unknown()),
            subrecord('_48_IAD', unknown()),
            subrecord('_09_IAD', unknown()),
            subrecord('_49_IAD', unknown()),
            subrecord('_0A_IAD', unknown()),
            subrecord('_4A_IAD', unknown()),
            subrecord('_0B_IAD', unknown()),
            subrecord('_4B_IAD', unknown()),
            subrecord('_0C_IAD', unknown()),
            subrecord('_4C_IAD', unknown()),
            subrecord('_0D_IAD', unknown()),
            subrecord('_4D_IAD', unknown()),
            subrecord('_0E_IAD', unknown()),
            subrecord('_4E_IAD', unknown()),
            subrecord('_0F_IAD', unknown()),
            subrecord('_4F_IAD', unknown()),
            subrecord('_10_IAD', unknown()),
            subrecord('_50_IAD', unknown()),
            multiStruct(Cinematic, [
                subrecord('_11_IAD', array('Saturation Mult', def('TimeInterpolator'), undefined)),
                subrecord('_51_IAD', array('Saturation Add', def('TimeInterpolator'), undefined)),
                subrecord('_12_IAD', array('Brightness Mult', def('TimeInterpolator'), undefined)),
                subrecord('_52_IAD', array('Brightness Add', def('TimeInterpolator'), undefined)),
                subrecord('_13_IAD', array('Contrast Mult', def('TimeInterpolator'), undefined)),
                subrecord('_53_IAD', array('Contrast Add', def('TimeInterpolator'), undefined))
            ]),
            subrecord('_14_IAD', unknown()),
            subrecord('_54_IAD', unknown())
        ]
    })
};