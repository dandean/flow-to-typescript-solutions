// inside some other file where we're selecting data from the store
// is where the opaque type comes into play:
import React from 'react'
import { useSelector } from './flux'
import { exampleSelector } from './store'

const ExampleComponent = () => {
  // typescript errors on the following line, because the code is directly
  // accessing properties of the opaque type:
  const doesNotWork = useSelector(state => state.ExampleStore.some.arbitrarily.nested.data.structure.exists)

  // instead, if we use the selector defined in the store file, the selector
  // works as expected:
  const works = useSelector(state => exampleSelector(state.ExampleStore))

  // Because our ExternalStateShape is tagged, we cannot pass in arbitrary
  // JS objects. We MUST provide the genuine state object.
  const doesNotAcceptVanillaObjects = useSelector(state => exampleSelector({}))

  return (<p>{works ? 'yay' : 'nae'}</p>)
}
