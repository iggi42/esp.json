let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

let convertFlags = ({flags}) => JSON.stringify(flags, null, 4);

// inherit flags
functionConverter('wbFlags', [
    args.identifier,
    { type: 'flagsField', name: 'flags' },
    { type: 'boolean', name: 'unused' }
], convertFlags);

// TODO: handle flagsToIgnore ?
functionConverter('wbFlags', [
    args.identifier,
    { type: 'flagsField', name: 'flags' },
    { type: 'array of number', name: 'flagsToIgnore' }
], convertFlags);

// new flags
functionConverter('wbFlags', [
    { type: 'flagsField', name: 'flags' },
    { type: 'boolean', name: 'unused' }
], convertFlags);

functionConverter('wbFlags', [
    { type: 'flagsField', name: 'flags' },
    { type: 'array of number', name: 'flagsToIgnore' }
], convertFlags);