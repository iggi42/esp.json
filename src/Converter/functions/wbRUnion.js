let {functionConverter} = require('../converters'),
    {args, reqLine} = require('../helpers');

functionConverter('wbRUnion', [
    args.name,
    args.members,
    args.signatures,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier
], ({name, members, required}, converter) => {
    converter.addRequires('subrecordUnion');
    let line = `subrecordUnion('${name}', ${members})`;
    return reqLine(required, line, converter);
});