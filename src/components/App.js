import React from 'react'
import Calculator from './Calculator'
class App extends React.Component {
    constructor() {
        super()
        this.state= {
    
        }
    }
   
    render() {

        return (

            <div className="container text-center">
                <div className="row ">
                    <div className="col-xl-12 heading">
                        <h1 >Calculator</h1>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-xl-12">
                        <Calculator />
                    </div>
                </div>
            </div>
        )
    }
}



export default App