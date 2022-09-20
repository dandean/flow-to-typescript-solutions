// Inside the store file, we define store structure, with full knowledge of the
// state shape. This is not exported.
type InternalStateShape = {
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

// We export the external representation of the state shape:
export type ExternalStateShape = {}

// wrap and unwrap functions take and return internal/external representations
// of the shape. These functions can be used *internally*, but MUST NOT be
// exported by the library; consumers cannot have access to these translators.
export const wrap = (state: InternalStateShape) => <ExternalStateShape>state
export const unwrap = (state: ExternalStateShape) => <InternalStateShape>state

export const initialState: InternalStateShape = {
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
}

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
