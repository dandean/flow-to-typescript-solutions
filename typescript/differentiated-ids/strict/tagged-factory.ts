/**
 * Challenge:
 * - Distinguish between types of IDs
 * - All IDs are strings under the hood, and can be used just like a normal string
 * - Arbitrary strings cannot be assigned to variables of the type; values must
 *   pass through a factory function.
 * - Variables of a different tagged type cannot be assigned.
 *
 * Use Case:
 * This is useful when we want to ensure string ID's conform to a specific format
 * and when we want to ensure ID types cannot be accidentally mis-assigned. For
 * instance, when we have Component and we want to ensure only a ComponentID can
 * be assigned to it, and not a VariableID.
 */

declare const COMPONENT_ID: unique symbol;
declare const VARIABLE_ID: unique symbol;

export type ComponentId = string & {
  [COMPONENT_ID]: true;
};

export type VariableId = string & {
  [VARIABLE_ID]: true;
};

function assertIsComponentId(value: string): asserts value is ComponentId {
  // Here we could even have some logic to verify the string format...
}

/**
 * Creates a tagged string value of type `ComponentId`
 */
export const createComponentId = (value: string): ComponentId => {
  assertIsComponentId(value);
  return value;
};

function assertIsVariableId(value: string): asserts value is VariableId {
  // Here we could even have some logic to verify the string format...
}

/**
 * Creates a tagged string value of type `Variable`
 */
export const createVariableId = (value: string): VariableId => {
  assertIsVariableId(value);
  return value;
};
