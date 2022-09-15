import { createWFDLThingy, useWFDLThingy } from './wfdl-sdk';

// Create a real WFDL thing:
const realThingy = createWFDLThingy('foo');

// Works, because the object was created with our constructor:
useWFDLThingy(realThingy);

// ---

// Now create a fake one using just structure:
const fakeThingy = {
  id: Math.round(Math.random() * 10000),
  name: 'bar'
}

// Type error, because we cannot fake the internals of the type:
useWFDLThingy(fakeThingy);
