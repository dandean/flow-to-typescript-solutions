// type NormalReducer = (state: any, action: any) => any
// type OpaqueReducer<reducer> = (state: {}, action: any) => ReturnType<typeof reducer>

// export const makeReducerOpaque = (reducer: NormalReducer) => <OpaqueReducer<reducer>> reducer

// type NormalSelector = (state: any) => any
// type OpaqueSelector<selector> = ({}) => Returntype<typeof selector>

// export const makeSelectorOpaque = (selector: NormalSelector) => <OpaqueSelector<selector>> selector

import * as internals from "./store";

const makeReducerOpaque = <T extends (...args: any) => any>(reducer: T) => {
  const OPAQUE: unique symbol = Symbol();
  type OpaqueShape = { readonly [OPAQUE]: "🫥" };
  type Opaque<T> = OpaqueShape; // Note how provided type T is discarded

  return reducer as (
    state: Opaque<Parameters<T>[0]>,
    actions: Parameters<T>[1]
  ) => Opaque<ReturnType<T>>;
};

export const exampleReducer = makeReducerOpaque(internals.exampleReducer);
