import {
  ComponentId,
  createComponentId,
  createVariableId,
} from "./tagged-factory";

// Create variables of each type of ID:
let componentIdOne = createComponentId("foo");
const variableIdOne = createVariableId("bar");

// Type Error: cannot assign the incorrect variable type:
componentIdOne = variableIdOne;

// Type Error: cannot assign the underlying value type:
const componentIdTwo: ComponentId = "foo";

// The value itself operates like a primitive:
console.log(componentIdOne.toUpperCase().charAt(0)); // "F"

// ID's of the same type CAN be assigned to each other:
const componentIdThree = createComponentId("baz");
componentIdOne = componentIdThree;
