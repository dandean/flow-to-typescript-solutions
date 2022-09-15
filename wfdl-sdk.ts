/**
 * Challenge: WFDL Expressions and Types. Because they are opaque (they can only
 * be created by calling the constructor functions exposed by WFDL) this enables
 * us to chage the underlying representation to something 50% more compact
 * without changing anything but these constructor functions.
 * 
 * Without opaque types WFDL consumers would be able to create Expressions and
 * Types with literal objects which would hinder this and would expose
 * implementation details that should not be exposed.
 */

/**
 * A unique internal symbol we can use to name our tag field
 */
declare const WFDLOpaqueTypeTag: unique symbol;

/**
 * An internal type we can use to tag our internal types
 */
declare type WFDLInternal = { readonly [WFDLOpaqueTypeTag]: 'WFDLOpaqueTypeTag' };

/**
 * An internal type which cannot be created structurally.
 */
type WFDLThingy = {
  id: number,
  name: string
} & WFDLInternal

/**
 * A factory function for creating objects of an internal type. This allows
 * us to fully control the construction of these objects and ensure others
 * cannot create these objects ad-hoc.
 */
export function createWFDLThingy(name: string): WFDLThingy {
  return {
    id: Math.round(Math.random() * 5000),
    name
  } as WFDLThingy;
}

/**
 * A function which only accepts object constructed by our system. No ad-hoc
 * types are allowed.
 */
export function useWFDLThingy(thingy: WFDLThingy): void {}
