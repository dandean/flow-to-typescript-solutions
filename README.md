# Flow to TypeScript

This repository is a place to explore how to translate [Flow](https://flow.org)
patterns into comparable [TypeScript](https://www.typescriptlang.org) alternatives.

Flow and TypeScript are different type systems with different features. The goal
of this repository is NOT to achieve exact parity – that would only be possible
if the type systems themselves implemented more of the other's features.
**Instead**, the goal is to identify TypeScript patterns which provide a similar
amount of utility for the identified use-cases.

## Use Cases

### Differentiated ID Types

An ID value is often just a `string` literal. We want to be able to differentiate
different kinds of ID types so that one ID type cannot be assigned to another
ID type.

### Formatted String Value Types

Examples of this are Email, URL, and GUID. We want to be able to ensure that a
string value conforms to specific formatting constraints in order to be
considered valid.

### Opaque Structure Encapsulation

Our Redux stores are built upon state tree objects. We want the ability to make
that state tree shape opaque to consumers, requiring them to use provided state
selectors rather than drilling into the state tree itself via reducers.

## Reading

- [Implementing an opaque type in typescript](https://evertpot.com/opaque-ts-types/)
- [Functional Typescript: Opaque Types](https://denistakeda.github.io/articles/004_typescript_opaque.html)
- [beraliv: Opaque Types](https://blog.beraliv.dev/2021-05-07-opaque-type-in-typescript)
