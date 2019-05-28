let {functionConverter} = require('../converters'),
    {args, reqLine} = require('../helpers');

functionConverter('wbRStructSK', [
    args.sk,
    args.name,
    args.members,
    args.signatures,
    args.identifier,
    args.required,
    args.identifier,
    args.boolean,
    args.identifier,
    args.identifier,
    args.identifier
], ({sk, name, fields, required}, converter) => {
    converter.addRequires('sortKey', 'multiStruct');
    let structDef = `multiStruct('${name}', ${fields})`,
        line = `sortKey(${sk}, ${structDef})`;
    return reqLine(required, line, converter);
});