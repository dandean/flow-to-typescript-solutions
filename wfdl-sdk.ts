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
