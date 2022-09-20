/**
 * Challenge: "distinguishing between types of IDs. All IDs are strings under
 * the hood but we don’t want to allow for example using a Component ID where a
 * Variable ID is expected."
 */

/**
 * Tagged type interface lets us make a specific version of a literal type.
 */
interface Tag<T> {
  _tag?: T
}

/**
 * Tagged type generic provides a way to tag an underlying type to differentiate
 * different versions of the underlying type.
 */
export type Tagged<T, TagName> = T & Tag<TagName>;
