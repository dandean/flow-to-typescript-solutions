// @flow

// -----------------------------------------------------------------------------
// Here we have defined two different opaque string types. OUTSIDE of this file
// these two types cannot be assigned a string value, or be assigned to each
// other. WITHIN this file, the types are entirely interchangeable.
// -----------------------------------------------------------------------------
export opaque type ComponentId = string;
export opaque type VariableId = string;

// Here we assign arbitrary string values:
let foo: ComponentId = "foo";
let bar: VariableId = "bar";

// And even cross-assign them:
foo = bar;

// -----------------------------------------------------------------------------
// Here we provide factory functions for creating these value types. Because we
// cannot assign string literals we must go through factories. We can also do
// things like assert formatting or apply value transformations.
// -----------------------------------------------------------------------------
export function createComponentId(value: string): ComponentId {
  return value;
}
export function createVariableId(value: string): VariableId {
  if (value.length !== 10) {
    // Format assertions only applied at runtime, not statically verified.
    throw new Error("Variable IDs must be 10 characters in length");
  }
  return value.toUpperCase();
}
