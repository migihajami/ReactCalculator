import React from 'react'

class Display extends React.Component 
{
    render()
    {
        return <div className="display">{this.props.Value}</div>;
    }

    addDigit(digit){
        this.props.Number += digit;
        this.props.Value = this.props.number;
    }
}

export default Display