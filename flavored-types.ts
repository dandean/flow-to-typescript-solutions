
/**
 * Flavoring interface lets us make a specific version of a literal type.
 */
interface Flavoring<T> {
  _type?: T
}

/**
 * Flavored type provides a way to flavor
 */
export type Flavored<T, Flavor> = T & Flavoring<Flavor>;


/**
 * ID type for Components. Underlying type is string.
 */
type ComponentId = Flavored<string, 'ComponentId'>;

/**
 * ID type for Variables. Underlying type is ALSO string.
 */
type VariableId = Flavored<string, 'VariableId'>;

// Declare variables of each type, assign the underlying type:
const componentIdOne: ComponentId = 'foo';
const variableIdOne: VariableId = 'bar';


// Assign Variable ID to Component ID: Type Error!
const componentIdTwo: ComponentId = variableIdOne;

