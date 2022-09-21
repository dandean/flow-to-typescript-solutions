/**
 * Tagged type interface lets us make a specific version of a literal type.
 */
interface Tag<T> {
  // Optional field is what allows us to assign string values directly to the value
  _tag?: T;
}

/**
 * Tagged type generic provides a way to tag an underlying type to differentiate
 * different versions of the underlying type.
 *
 * Usage:
 *
 *      type ComponentId = Tagged<string, "ComponentId">;
 */
export type Tagged<T, TagName> = T & Tag<TagName>;
