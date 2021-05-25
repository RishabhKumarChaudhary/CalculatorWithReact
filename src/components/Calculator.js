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

    render() {
        return (
            <div>
              <input type="number" name="num1" value={this.state.num1} onChange={this.changeValue}/>
              <input type="number" name="num2" value={this.state.num2} onChange={this.changeValue}/>
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
                <h1>{this.state.answer}</h1>
            </div>
        )
    }
}


export default Calculator