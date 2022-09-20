import {
  createOpaqueReducer,
  createOpaqueSelector,
  createOpaqueState,
} from "../lib/opaque-factories";
import * as internals from "./internals";

// -----------------------------------------------------------------------------
// The Public API for this Store
// Anything which exposes internal library state structure is processed through
// factory functions to make them "opaque" and safe to use elsewhere.
// -----------------------------------------------------------------------------

// Create an opaque version of the State object so we can reuse it's opaque
// type across all other call sites.
export const initialState = createOpaqueState(internals.initialState);

// Export opaque state shape for configuration within flux
export type StateShape = typeof initialState;

export const exampleReducer = createOpaqueReducer(
  internals.exampleReducer,
  initialState
);

export const exampleSelector = createOpaqueSelector(
  internals.exampleSelector,
  initialState
);
