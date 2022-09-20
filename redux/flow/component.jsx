// @flow

// inside some other file where we're selecting data from the store
// is where the opaque type comes into play:
import React from 'react'
import { useSelector } from './flux'
import { exampleSelector } from './store'

const ExampleComponent = () => {
    // flow errors on the following line, because the code is directly accessing
    // properties of the opaque type:
    // const thingyExists = useSelector(state => state.ExampleStore.some.arbitrarily.nested.data.structure.exists)

    // instead, if we use the selector defined in the store file, the selector
    // works as expected:
    const thingyExists = useSelector(state => exampleSelector(state.ExampleStore))

    return <p>{thingyExists ? 'yay' : 'nae'}</p>
}

// we want it to error on that first example because that version is tightly
// coupled to the current state shape. the second version delegates the
// knowledge of "where does this information exist in state" to the selector,
// so any changes to the internals of the store package in future *do not*
// require changes to consumers
