import { exampleReducer, initialState, StateShape } from "./store";

// outside the store file, we would add the reducer to the store;
// this is a highly simplified example to make it a little more
// similar to our use case:
interface GlobalState {
  ExampleStore: StateShape;
}
const initialGlobalState = { ExampleStore: initialState };

const combinedReducer = (
  state: GlobalState = initialGlobalState,
  action: any
): GlobalState => ({
  ExampleStore: exampleReducer(state.ExampleStore, action),
});

// to make flow pass we'll also create a greatly simplified useSelector
// hook which exposes the same API as our actual selectors, but instead
// just grabs the data from a static object
const currentState = combinedReducer(initialGlobalState, { type: "INIT" });

export const useSelector = (selector: (state: GlobalState) => any) =>
  selector(currentState);
