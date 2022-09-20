// -----------------------------------------------------------------------------
// Opaque Factories
// These functions take module internals and wrap them in functions for external
// use. Internal state structure is obscured through the use of "opaque" types.
// -----------------------------------------------------------------------------

/**
 * Creates an "opaque" wrapper around the provides state object to prevent
 * consumers of this store from directly accessing any of its internal state
 * structures; all state should be accessed via selectors.
 */
export const createOpaqueState = <T>(state: T) => {
  const OPAQUE: unique symbol = Symbol();
  return state as { readonly [OPAQUE]: "🫥" };
};

/**
 * Creates an opaque version of the given reducer so that internal state
 * structure is inaccessible.
 */
export const createOpaqueReducer = <
  T extends (...args: any) => any,
  OpaqueState
>(
  reducer: T,
  stateShape: OpaqueState
) => {
  return reducer as (
    state: OpaqueState,
    actions: Parameters<T>[1]
  ) => OpaqueState;
};

/**
 * Creates an opaque version of the given selector which can accept opaque state
 * and return whatever the selector already returns.
 */
export const createOpaqueSelector = <
  T extends (...args: any) => any,
  OpaqueState
>(
  selector: T,
  stateShape: OpaqueState
) => {
  return selector as (state: OpaqueState) => ReturnType<T>;
};
