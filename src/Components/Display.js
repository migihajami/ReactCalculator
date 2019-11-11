import React from 'react'

class Display extends React.Component 
{
    render()
    {
        return <div className="display">
            <div className="calc-top">
                {this.props.Value}
            </div>
            <div className="calc-expression">
                {this.props.Expression}
            </div>
        </div>;
    }

    addDigit(digit){
        this.props.Number += digit;
        this.props.Value = this.props.number;
    }
}

export default Display