let {functionConverter} = require('../converters'),
    {args, reqLine} = require('../helpers');

functionConverter('wbRStructs', [
    args.name,
    { type: 'string', name: 'structName' },
    args.members,
    args.signatures,
    args.identifier,
    args.required,
    args.identifier,
    args.identifier,
    args.identifier,
    args.identifier
], ({name, structName, members, required}, converter) => {
    converter.addRequires('arrayOfMultiStruct', 'sortKey', 'multiStruct');
    let multiStructArg = `multiStruct(${structName}, ${members})`,
        line = `arrayOfMultiStruct('${name}', ${multiStructArg})`;
    return reqLine(required, line, converter);
});