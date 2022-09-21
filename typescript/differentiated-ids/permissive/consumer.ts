import { Tagged } from "./tagged";

/**
 * ID type for Components. Underlying type is string.
 */
type ComponentId = Tagged<string, "ComponentId">;

/**
 * ID type for Variables. Underlying type is ALSO string.
 */
type VariableId = Tagged<string, "VariableId">;

// Declare variables of each type, assign the underlying type:
const componentIdOne: ComponentId = "foo";
const variableIdOne: VariableId = "bar";

// Assign Variable ID to Component ID: Type Error!
const componentIdTwo: ComponentId = variableIdOne;
