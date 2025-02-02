let {
    addDef, uint32, opts, bytes, ckFormId, 
    int16, struct, union, float, sortKey, 
    array, def, format, uint16, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('NVNM', 
        subrecord('NVNM', struct('Geometry', [
            opts(uint32('Version'), {
                "defaultNativeValue": 12
            }),
            opts(bytes('Magic', 4), {
                "defaultEditValue": "'3C A0 E9 A5'"
            }),
            ckFormId('Parent Worldspace', ['WRLD', 'NULL']),
            union('Parent', [
                struct('Coordinates', [
                    int16('Grid Y'),
                    int16('Grid X')
                ]),
                ckFormId('Parent Cell', ['CELL'])
            ]),
            opts(array('Vertices', 
                sortKey([0, 1, 2], struct('Vertex', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ]))
            , -1), {
                "includeFlag": "dfNotAlignable"
            }),
            opts(array('Triangles', 
                struct('Triangle', [
                    opts(format(int16('Vertex 0'), def('VertexToStr0')), {
                        "linksToCallback": "VertexLinksTo"
                    }),
                    opts(format(int16('Vertex 1'), def('VertexToStr1')), {
                        "linksToCallback": "VertexLinksTo"
                    }),
                    opts(format(int16('Vertex 2'), def('VertexToStr2')), {
                        "linksToCallback": "VertexLinksTo"
                    }),
                    opts(format(int16('Edge 0-1'), def('EdgeToStr0')), {
                        "linksToCallback": "EdgeLinksTo0"
                    }),
                    opts(format(int16('Edge 1-2'), def('EdgeToStr1')), {
                        "linksToCallback": "EdgeLinksTo1"
                    }),
                    opts(format(int16('Edge 2-0'), def('EdgeToStr2')), {
                        "linksToCallback": "EdgeLinksTo2"
                    }),
                    format(uint16('Flags'), {
                        0: 'Edge 0-1 link',
                        1: 'Edge 1-2 link',
                        2: 'Edge 2-0 link',
                        3: 'Deleted',
                        4: 'No Large Creatures',
                        5: 'Overlapping',
                        6: 'Preferred',
                        7: '',
                        8: 'Unknown 9',
                        9: 'Water',
                        10: 'Door',
                        11: 'Found',
                        12: 'Unknown 13',
                        13: '',
                        14: '',
                        15: ''
                    }),
                    format(uint16('Cover Flags'), {
                        0: 'Edge 0-1 Cover Value 1/4',
                        1: 'Edge 0-1 Cover Value 2/4',
                        2: 'Edge 0-1 Cover Value 3/4',
                        3: 'Edge 0-1 Cover Value 4/4',
                        4: 'Edge 0-1 Left',
                        5: 'Edge 0-1 Right',
                        6: 'Edge 1-2 Cover Value 1/4',
                        7: 'Edge 1-2 Cover Value 2/4',
                        8: 'Edge 1-2 Cover Value 3/4',
                        9: 'Edge 1-2 Cover Value 4/4',
                        10: 'Edge 1-2 Left',
                        11: 'Edge 1-2 Right',
                        12: 'Unknown 13',
                        13: 'Unknown 14',
                        14: 'Unknown 15',
                        15: 'Unknown 16'
                    })
                ])
            , -1), {
                "includeFlag": "dfNotAlignable"
            }),
            opts(array('Edge Links', 
                struct('Edge Link', [
                    bytes('Unknown', 4),
                    ckFormId('Mesh', ['NAVM']),
                    int16('Triangle')
                ])
            , -1), {
                "includeFlag": "dfNotAlignable"
            }),
            array('Door Triangles', 
                sortKey([0, 2], struct('Door Triangle', [
                    opts(int16('Triangle before door'), {
                        "linksToCallback": "TriangleLinksTo"
                    }),
                    bytes('Unknown', 4),
                    ckFormId('Door', ['REFR'])
                ]))
            , -1),
            opts(array('Cover Triangles', 
                opts(int16('Triangle'), {
                    "linksToCallback": "TriangleLinksTo"
                })
            , -1), {
                "includeFlag": "dfNotAlignable"
            }),
            uint32('NavMeshGrid Divisor'),
            float('Max X Distance'),
            float('Max Y Distance'),
            float('Min X'),
            float('Min Y'),
            float('Min Z'),
            float('Max X'),
            float('Max Y'),
            float('Max Z'),
            opts(array('NavMeshGrid', 
                opts(array('NavMeshGridCell', 
                    opts(int16('Triangle'), {
                        "linksToCallback": "TriangleLinksTo"
                    })
                , -1), {
                    "includeFlag": "dfNotAlignable"
                })
            ), {
                "includeFlag": "dfNotAlignable"
            })
        ]))
    );
};