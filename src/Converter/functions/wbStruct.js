let {subrecordAndField} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbStruct', [
    args.name,
    args.fields,
    args.identifier,
    args.required,
    args.identifier,
    args.number
], ({sig, name, fields}, converter) => {
    converter.addRequires('struct');
    return `struct(${name}, ${fields})`;
});