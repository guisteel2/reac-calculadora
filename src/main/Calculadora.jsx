import React from 'react'
import '../css/Calculer.css' 
import Button from '../Componentes/Button'
import Display from '../Componentes/display'


const iniciarStatus = {
    displayValue: '0',
    clearDisplay:false,
    operation:null,
    value:[0,0],
    current:0,
    opspros: null
}

export default class Calculadora extends React.Component {
    
    state = { ...iniciarStatus }

    constructor(props) {
        super(props)
        this.limpa = this.limpa.bind(this)
        this.operacao = this.operacao.bind(this)
        this.fazercalculo = this.fazercalculo.bind(this)
    }

    limpa() {
        this.setState({ ...iniciarStatus })
    }

    operacao(operacao) {

        console.table(this.state);
        // if(this.state.displayValue === '.'){
        //     this.setState({clearDisplay:false, current:0 })
        //     return
        // }
        if(this.state.displayValue === '0' && this.state.value[0] === '0'){
            return
        }

        if(this.state.operation === null && this.state.current === 0){
            const valores = [...this.state.value]
            valores[0] = this.state.displayValue
            let asopr = this.state.displayValue + operacao
            this.setState({operation:operacao, value:valores, clearDisplay:true, current:1, opspros:asopr })
            return
        }

        console.log("valor do operation: "+this.state.operation)
         
            if (this.state.operation === '=' && this.state.value[1] === 0){
                return
            }

            let resultado = 0;

        
            switch (this.state.operation) {
                case '+':
                    resultado = parseFloat(this.state.displayValue) + parseFloat(this.state.value[0])
                    break
    
                case '-':
                    resultado =  parseFloat(this.state.value[0]) - parseFloat(this.state.displayValue)
                    break
                
                case '*':
                    resultado = parseFloat(this.state.displayValue) * parseFloat(this.state.value[0])
                    break

                case '/':
                    resultado = parseFloat(this.state.value[0]) / parseFloat(this.state.displayValue)
                    break
                                
                default:
                    resultado = 0;
            }

            let valores = [...this.state.value]
            valores[0] = resultado

            let asopr = this.state.opspros + this.state.displayValue+operacao
            
            this.setState({value:valores, displayValue:resultado, operation:operacao, clearDisplay:true , current:0, opspros:asopr })
            console.log('pass')
            console.log(valores)
            console.log(this.state)
            return
        
    }

    fazercalculo(n) {
        
        if( n === '.' && this.state.displayValue.includes('.')){
            return
        }

        if(this.state.operation === '='){
            this.setState({ ...iniciarStatus })
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay:false })
        
    }


    render(){
        return(
            <div className='Calculadora'>
                <Display ops={this.state.opspros} resultado ={this.state.displayValue} />
                <Button label="AC"click={this.limpa} triple />
                <Button label="/" click={this.operacao} operation/>
                <Button label="7" click={this.fazercalculo} />
                <Button label="8" click={this.fazercalculo} />
                <Button label="9" click={this.fazercalculo} />
                <Button label="*" click={this.operacao} operation />
                <Button label="4" click={this.fazercalculo} />
                <Button label="5" click={this.fazercalculo} />
                <Button label="6" click={this.fazercalculo} />
                <Button label="-" click={this.operacao} operation/> 
                <Button label="1" click={this.fazercalculo} />
                <Button label="2" click={this.fazercalculo} />
                <Button label="3" click={this.fazercalculo}/>
                <Button label="+" click={this.operacao} operation/> 
                <Button label="0" click={this.fazercalculo} double/>
                <Button label="." click={this.fazercalculo}/> 
                <Button label="=" click={this.operacao} operation/> 
            </div>
        )
    }
}
