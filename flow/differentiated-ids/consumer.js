// @flow

import {
  createComponentId,
  createVariableId,
  type ComponentId,
  type VariableId,
} from "./opaque";

// -----------------------------------------------------------------------------
// Here we see that we cannot assign string values variables of the type.
// -----------------------------------------------------------------------------
const componentIdOne: ComponentId = "foo";
const variableIdOne: VariableId = "bar";

// -----------------------------------------------------------------------------
// Here we create Opaque ID values.
// NOTE: We have to be explicit in the local declaration in order to enforce
//    the type; flow will assume a variable could be any number of types based
//    on the value assignments we make if we rely on type inference.
// -----------------------------------------------------------------------------
let componentIdTwo: ComponentId = createComponentId("baz");
const variableIdTwo: VariableId = createVariableId("boom");

// We cannot assign one to the other, even though they share underlying types
componentIdTwo = variableIdTwo;
