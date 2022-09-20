// @flow

// inside the store file, we set up the store structure, with
// full knowledge of the state shape, which is marked as an
// opaque type
export opaque type StateShape = {|
  some: {|
      arbitrarily: {|
          nested: {|
              data: {|
                  structure: {|
                      exists: boolean,
                  |},
              |},
          |},
      |},
  |},
|};

export const initialState: StateShape = {
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
export const exampleReducer = (state: StateShape = initialState, action: any): StateShape => {
  switch (action.type) {
      default: {
          return state
      }
  }
}

// selector inside the same file, meaning it has access to the state's internals
export const exampleSelector = (state: StateShape): boolean =>
  state.some.arbitrarily.nested.data.structure.exists;
