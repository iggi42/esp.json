let {subrecordAndField, functionConverter} = require('../converters'),
    {args} = require('../helpers');

subrecordAndField('wbArrayS', [
    args.name,
    args.field,
    args.size,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, element, size}, converter) => {
    converter.addRequires('array');
    let sizeArg = size ? ', ' + size : '';
    return `array('${name}', ${element}${sizeArg})`;
});

functionConverter('wbArrayS', [
    args.name,
    args.field,
    args.identifier,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, element, size}, converter) => {
    converter.addRequires('array');
    let sizeArg = size ? ', ' + size : '';
    return `array('${name}', ${element}${sizeArg})`;
});