// Internal tag marks an object as "internal", which exposes all fields on the
// object for access.
declare const INTERNAL: unique symbol;
declare type InternalTag = { readonly [INTERNAL]: '🤐' };
declare type Internal<T> = T & InternalTag;

// External tag marks an object as "external", obscuring all fields, making
// disallowing property access while ensuring that only the genuine object can
// be provided to public APIs.
declare const EXTERNAL: unique symbol;
declare type ExternalTag = { readonly [EXTERNAL]: '👋' };
declare type External<T> = ExternalTag; // Note how provided type T is discarded

// The actual shape of our store, not exported.
interface StateShape {
  some: {
    arbitrarily: {
      nested: {
        data: {
          structure: {
            exists: boolean,
          },
        },
      },
    },
  },
};

// Tag the state shape for internal use, not exported.
interface InternalStateShape extends Internal<StateShape> {}

// Tag the state shape for external use, exported.
export interface ExternalStateShape extends External<StateShape> {}

// wrap and unwrap functions take and return internal/external representations
// of the shape. These functions can be used *internally*, but MUST NOT be
// exported by the library; consumers cannot have access to these translators.
export const wrap = (state: InternalStateShape) => state as unknown as ExternalStateShape
export const unwrap = (state: ExternalStateShape) => state as unknown as InternalStateShape

// Define our initial state
const internalInitialState: InternalStateShape = {
  some: {
    arbitrarily: {
      nested: {
        data: {
          structure: {
            exists: true,
          }
        }
      }
    }
  },
  // Spread in internal tag instead of casting entire object.
  ...<InternalTag>{},
};

export const initialState = wrap(internalInitialState);

// typical reducer with cases for different actions
export const exampleReducer = (state: ExternalStateShape = initialState, action: any): ExternalStateShape => {
  switch (action.type) {
    default: {
      return state
    }
  }
}

// Selector uses the `unwrap()` function to gain access to internal shape:
export const exampleSelector = (state: ExternalStateShape): boolean =>
  unwrap(state).some.arbitrarily.nested.data.structure.exists;
