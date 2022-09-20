declare const INTERNAL: unique symbol;
declare type InternalTag = { readonly [INTERNAL]: '🤐' };
declare type Internal<T> = T & InternalTag;

declare const EXTERNAL: unique symbol;
declare type ExternalTag = { readonly [EXTERNAL]: '👋' };
declare type External<T> = T & ExternalTag;

// Inside the store file, we define store structure, with full knowledge of the
// state shape. This is not exported.
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

interface InternalStateShape extends Internal<StateShape> {}

// We export the external representation of the state shape:
export interface ExternalStateShape extends External<{}> {}

// wrap and unwrap functions take and return internal/external representations
// of the shape. These functions can be used *internally*, but MUST NOT be
// exported by the library; consumers cannot have access to these translators.
export const wrap = (state: InternalStateShape) => state as unknown as ExternalStateShape
export const unwrap = (state: ExternalStateShape) => state as unknown as InternalStateShape

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
  }
} as InternalStateShape;

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
