import React, { useContext } from 'react'
import { FirstName, LastName} from './App'

const ComC = () => {

    const fName = useContext(FirstName)
    const lName = useContext(LastName)

  return (
    <>
        {/* <FirstName.Consumer>
            {(fName)=>{
                return <LastName.Consumer>
                    {(lName)=>{
                        return <h1>Hello, My name is {fName} {lName}</h1>
                    }}
                </LastName.Consumer>
            }}
        </FirstName.Consumer> */}

        <h1>Hello, My name is {fName} {lName}</h1>

    </>
  )
}

export default ComC