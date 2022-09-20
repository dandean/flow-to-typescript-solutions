// inside some other file where we're selecting data from the store
// is where the opaque type comes into play:
import React from "react";
import { useSelector } from "./flux";
import { exampleSelector } from "./store";

const ExampleComponent = () => {
  // TS errors on the following line, because the code is directly accessing
  // properties of the opaque type:
  const doesNotWork = useSelector(
    (state) => state.ExampleStore.some.arbitrarily.nested.data.structure.exists
  );

  const doesNotWork2 = useSelector((state) =>
    // TS errors on the following line because TS knows the object being passed
    // in is not genuine; it's likely an invalid state object.
    exampleSelector({})
  );

  // instead, if we use the selector defined in the store file, the selector
  // works as expected:
  const works = useSelector((state) => exampleSelector(state.ExampleStore));

  return <p>{works ? "yay" : "nae"}</p>;
};
