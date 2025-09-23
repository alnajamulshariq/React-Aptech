import React, { use, useContext } from 'react'
import { MyNameContext } from './App'

function Third() {
    var name = useContext(MyNameContext);
  return (
    <>
    <p>Hey, {name} from First Component</p>
    </>
  )
}

export default Third