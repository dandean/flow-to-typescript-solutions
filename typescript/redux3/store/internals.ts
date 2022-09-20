// -----------------------------------------------------------------------------
// The internal API for this store.
// Anything exported by this file will be wrapped by various opaque factory
// functions before being exported to the public API.
// -----------------------------------------------------------------------------

export interface StateShape {
  some: {
    arbitrarily: {
      nested: {
        data: {
          structure: {
            exists: boolean;
          };
        };
      };
    };
  };
}

export const initialState: StateShape = {
  some: {
    arbitrarily: {
      nested: {
        data: {
          structure: {
            exists: true,
          },
        },
      },
    },
  },
};

// typical reducer with cases for different actions
export const exampleReducer = (
  state: StateShape = initialState,
  action: any
): StateShape => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

// Selector uses the `unwrap()` function to gain access to internal shape:
export const exampleSelector = (state: StateShape): boolean =>
  state.some.arbitrarily.nested.data.structure.exists;
