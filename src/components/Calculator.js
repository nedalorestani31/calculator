import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
    state = {
        inputValue: ''
    }

    handleValueChange = (num) => {
        let value = this.state.inputValue + ' ' + num;
        this.setState({ inputValue: value })
    }

    handlEqual = () => {
        let value = eval(this.state.inputValue)
        this.setState({ inputValue: value })
    }

    handleclear = () => {
        this.setState({ inputValue: []});
    }

    render() {
        return (
            <div className='grid'>
                <input
                    className='display'
                    defaultValue={this.state.inputValue}
                />

                <button
                    onClick={() => this.handleclear('ca')}
                    className='clear' 
                >ca
                </button>
                <button
                    onClick={() => this.handleValueChange('/')}
                    className='division' 
                >/
                </button>


                <button
                    onClick={() => this.handleValueChange('1')}
                    className='one' 
                >1
                </button>
                <button
                    onClick={() => this.handleValueChange('2')}
                    className='two' 
                >2
                </button>
                <button
                    onClick={() => this.handleValueChange('3')}
                    className='three' 
                >3
                </button>
                <button
                    onClick={() => this.handleValueChange('+')}
                    className='plus' 
                >+
                </button>


                <button
                    onClick={() => this.handleValueChange('4')}
                    className='four' 
                >4
                </button>
                <button
                    onClick={() => this.handleValueChange('5')}
                    className='five' 
                >5
                </button>
                <button
                    onClick={() => this.handleValueChange('6')}
                    className='six' 
                >6
                </button>
                <button
                    onClick={() => this.handleValueChange('-')}
                    className='suptaction' 
                >-
                </button>


                <button
                    onClick={() => this.handleValueChange('7')}
                    className='seven' 
                >7
                </button>
                <button
                    onClick={() => this.handleValueChange('8')}
                    className='eight' 
                >8
                </button>
                <button
                    onClick={() => this.handleValueChange('9')}
                    className='nine' 
                >9
                </button>
                <button
                    onClick={() => this.handleValueChange('*')}
                    className='multiplication' 
                >x
                </button>


                <button
                    onClick={() => this.handleValueChange('0')}
                    className='zero' 
                >0
                </button>
                <button
                    onClick={() => this.handlEqual('=')}
                    className='equal' 
                >=
                </button>   
            </div>
        )
    }
}

export default Calculator ;