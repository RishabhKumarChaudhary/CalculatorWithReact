import React from 'react'

class Calculator extends React.Component {
    constructor() {
        super()
        this.state={
            num1:"",
            num2:"",
            answer:""
        }
        this.methodAdd = this.methodAdd.bind(this)
        this.methodDiv = this.methodDiv.bind(this)
        this.methodMul = this.methodMul.bind(this)
        this.changeValue = this.changeValue.bind(this)
        this.methodExpo = this.methodExpo.bind(this)
        this.methodMod = this.methodMod.bind(this)
    }
    

    changeValue({target}) {
        this.setState({
            [target.name]: target.value
        })
    }

    methodAdd() {
        const result = Number(this.state.num1) + Number(this.state.num2)
        this.setState({answer:Number(result)})

    }
    methodMul() {
        const result = Number(this.state.num1) * Number(this.state.num2)
        this.setState({answer:Number(result)})
    }
    methodDiv() {
        const result = Number(this.state.num1) / Number(this.state.num2)
        this.setState({answer:Number(result)})
    }

    methodMod() {
       const result = Number(this.state.num1) % Number(this.state.num2)
        this.setState({answer:Number(result)})
    }

    methodLog() {

    }

    methodExpo() {
    const result = Math.exp(Number(this.state.num1))    
        this.setState({answer:Number(result)})
    }

    render() {
        return (
            <div>
{/*

 */} 
                <div className="row">
                    <div className="col-md-6">
                    <input type="number" name="num1" value={this.state.num1} onChange={this.changeValue}/>
                    </div>
                    <div className="col-md-6">
                    <input type="number" name="num2" value={this.state.num2} onChange={this.changeValue}/>  
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-xl-4">
                        <button onClick={this.methodAdd} className="btn btn-primary"> Add </button></div>
                        <div className="col-xl-4">
                        <button  onClick={this.methodMul} className="btn btn-primary"> Mul </button>
                        </div>
                        <div className="col-xl-4">
                        <button  onClick={this.methodDiv} className="btn btn-primary"> Divide </button>
 
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-xl-4">
                        <button onClick={this.methodMod} className="btn btn-primary"> Mod </button></div>
                        <div className="col-xl-4">
                        <button  onClick={this.methodLog} className="btn btn-primary"> Log </button>
                        </div>
                        <div className="col-xl-4">
                        <button  onClick={this.methodExpo} className="btn btn-primary"> Exponent </button>
 
                    </div>
                </div>
                <div className="container mt-3 result">
                        <div className="row">
                        <div className="col-sm-3"><h2>Answer</h2></div>
                        <div className="col-md-9 box">
                        <h1>{this.state.answer}</h1>
                        </div>

                        
                        </div>
                </div>
             </div>
        )
    }
}


export default Calculator