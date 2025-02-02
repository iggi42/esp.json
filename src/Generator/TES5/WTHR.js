let {
    def, subrecord, cstring, bytes, unknown, 
    ckFormId, req, uint8, format, array, 
    opts, multiStruct, float, struct, uint32, 
    arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('WTHR', 'Weather', {
        members: [
            def('EDID'),
            subrecord('\x000TX', cstring('Cloud Texture Layer #0')),
            subrecord('\x100TX', cstring('Cloud Texture Layer #1')),
            subrecord('\x200TX', cstring('Cloud Texture Layer #2')),
            subrecord('\x300TX', cstring('Cloud Texture Layer #3')),
            subrecord('\x400TX', cstring('Cloud Texture Layer #4')),
            subrecord('\x500TX', cstring('Cloud Texture Layer #5')),
            subrecord('\x600TX', cstring('Cloud Texture Layer #6')),
            subrecord('\x700TX', cstring('Cloud Texture Layer #7')),
            subrecord('\x800TX', cstring('Cloud Texture Layer #8')),
            subrecord('\x900TX', cstring('Cloud Texture Layer #9')),
            subrecord('\x3A0TX', cstring('Cloud Texture Layer #10')),
            subrecord('\x3B0TX', cstring('Cloud Texture Layer #11')),
            subrecord('\x3C0TX', cstring('Cloud Texture Layer #12')),
            subrecord('\x3D0TX', cstring('Cloud Texture Layer #13')),
            subrecord('\x3E0TX', cstring('Cloud Texture Layer #14')),
            subrecord('\x3F0TX', cstring('Cloud Texture Layer #15')),
            subrecord('\x400TX', cstring('Cloud Texture Layer #16')),
            subrecord('A0TX', cstring('Cloud Texture Layer #17')),
            subrecord('B0TX', cstring('Cloud Texture Layer #18')),
            subrecord('C0TX', cstring('Cloud Texture Layer #19')),
            subrecord('D0TX', cstring('Cloud Texture Layer #20')),
            subrecord('E0TX', cstring('Cloud Texture Layer #21')),
            subrecord('F0TX', cstring('Cloud Texture Layer #22')),
            subrecord('G0TX', cstring('Cloud Texture Layer #23')),
            subrecord('H0TX', cstring('Cloud Texture Layer #24')),
            subrecord('I0TX', cstring('Cloud Texture Layer #25')),
            subrecord('J0TX', cstring('Cloud Texture Layer #26')),
            subrecord('K0TX', cstring('Cloud Texture Layer #27')),
            subrecord('L0TX', cstring('Cloud Texture Layer #28')),
            subrecord('DNAM', bytes('Unused')),
            subrecord('CNAM', bytes('Unused')),
            subrecord('ANAM', bytes('Unused')),
            subrecord('BNAM', bytes('Unused')),
            subrecord('LNAM', unknown()),
            subrecord('MNAM', ckFormId('Precipitation Type', ['SPGD', 'NULL'])),
            req(subrecord('NNAM', ckFormId('Visual Effect', ['RFCT', 'NULL']))),
            subrecord('ONAM', bytes('Unused')),
            multiStruct('Cloud Speed', [
                opts(subrecord('RNAM', array('Y Speed', 
                    format(uint8('Layer'), def('CloudSpeedToStr'))
                )), {
                    "includeFlag": "dfNotAlignable"
                }),
                opts(subrecord('QNAM', array('X Speed', 
                    format(uint8('Layer'), def('CloudSpeedToStr'))
                )), {
                    "includeFlag": "dfNotAlignable"
                })
            ]),
            opts(subrecord('PNAM', array('Cloud Colors', 
                def('WeatherColors', { name: 'Layer' })
            )), {
                "includeFlag": "dfNotAlignable"
            }),
            opts(subrecord('JNAM', array('Cloud Alphas', 
                struct('Layer', [
                    float('Sunrise'),
                    float('Day'),
                    float('Sunset'),
                    float('Night')
                ])
            )), {
                "includeFlag": "dfNotAlignable"
            }),
            req(subrecord('NAM0', struct('Weather Colors', [
                def('WeatherColors', { name: 'Sky-Upper' }),
                def('WeatherColors', { name: 'Fog Near' }),
                def('WeatherColors', { name: 'Unknown' }),
                def('WeatherColors', { name: 'Ambient' }),
                def('WeatherColors', { name: 'Sunlight' }),
                def('WeatherColors', { name: 'Sun' }),
                def('WeatherColors', { name: 'Stars' }),
                def('WeatherColors', { name: 'Sky-Lower' }),
                def('WeatherColors', { name: 'Horizon' }),
                def('WeatherColors', { name: 'Effect Lighting' }),
                def('WeatherColors', { name: 'Cloud LOD Diffuse' }),
                def('WeatherColors', { name: 'Cloud LOD Ambient' }),
                def('WeatherColors', { name: 'Fog Far' }),
                def('WeatherColors', { name: 'Sky Statics' }),
                def('WeatherColors', { name: 'Water Multiplier' }),
                def('WeatherColors', { name: 'Sun Glare' }),
                def('WeatherColors', { name: 'Moon Glare' })
            ]))),
            req(subrecord('FNAM', struct('Fog Distance', [
                float('Day - Near'),
                float('Day - Far'),
                float('Night - Near'),
                float('Night - Far'),
                float('Day - Power'),
                float('Night - Power'),
                float('Day - Max'),
                float('Night - Max')
            ]))),
            req(subrecord('DATA', struct('Data', [
                uint8('Wind Speed'),
                bytes('Unknown', 2),
                uint8('Trans Delta'),
                uint8('Sun Glare'),
                uint8('Sun Damage'),
                uint8('Precipitation - Begin Fade In'),
                uint8('Precipitation - End Fade Out'),
                uint8('Thunder/Lightning - Begin Fade In'),
                uint8('Thunder/Lightning - End Fade Out'),
                uint8('Thunder/Lightning - Frequency'),
                format(uint8('Flags'), {
                    0: 'Weather - Pleasant',
                    1: 'Weather - Cloudy',
                    2: 'Weather - Rainy',
                    3: 'Weather - Snow',
                    4: 'Sky Statics - Always Visible',
                    5: 'Sky Statics - Follows Sun Position'
                }),
                struct('Lightning Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue')
                ]),
                uint8('Visual Effect - Begin'),
                uint8('Visual Effect - End'),
                uint8('Wind Direction'),
                uint8('Wind Direction Range')
            ]))),
            subrecord('NAM1', format(uint32('Disabled Cloud Layers'), {
                0: '0',
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9',
                10: '10',
                11: '11',
                12: '12',
                13: '13',
                14: '14',
                15: '15',
                16: '16',
                17: '17',
                18: '18',
                19: '19',
                20: '20',
                21: '21',
                22: '22',
                23: '23',
                24: '24',
                25: '25',
                26: '26',
                27: '27',
                28: '28',
                29: '29',
                30: '30',
                31: '31'
            })),
            arrayOfSubrecord('Sounds', 
                subrecord('SNAM', struct('Sound', [
                    ckFormId('Sound', [
                        'SNDR',    'SOUN',    'NULL'
                    ]),
                    format(uint32('Type'), {
                        0: 'Default',
                        1: 'Precipitation',
                        2: 'Wind',
                        3: 'Thunder'
                    })
                ]))
            ),
            arrayOfSubrecord('Sky Statics', 
                subrecord('TNAM', ckFormId('Static', ['STAT', 'NULL']))
            ),
            subrecord('IMSP', struct('Image Spaces', [
                ckFormId('Sunrise', ['IMGS', 'NULL']),
                ckFormId('Day', ['IMGS', 'NULL']),
                ckFormId('Sunset', ['IMGS', 'NULL']),
                ckFormId('Night', ['IMGS', 'NULL'])
            ])),
            subrecord('HNAM', struct('Volumetric Lighting', [
                ckFormId('Sunrise', ['VOLI', 'NULL']),
                ckFormId('Day', ['VOLI', 'NULL']),
                ckFormId('Sunset', ['VOLI', 'NULL']),
                ckFormId('Night', ['VOLI', 'NULL'])
            ])),
            req(multiStruct('Directional Ambient Lighting Colors', [
                subrecord('DALC', def('wbAmbientColors', { name: 'Sunrise' })),
                subrecord('DALC', def('wbAmbientColors', { name: 'Day' })),
                subrecord('DALC', def('wbAmbientColors', { name: 'Sunset' })),
                subrecord('DALC', def('wbAmbientColors', { name: 'Night' }))
            ])),
            subrecord('NAM2', bytes('Unused')),
            subrecord('NAM3', bytes('Unused')),
            multiStruct('Aurora', [
                def('MODL')
            ]),
            subrecord('GNAM', ckFormId('Sun Glare Lens Flare', ['LENS']))
        ]
    })
};