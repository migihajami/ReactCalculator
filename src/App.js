import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleKeyboard from './Components/SimpleKeyboard'
import Display from './Components/Display'


class App extends React.Component
{
  state = { display: "0", expression: ""}

  constructor(props)
  {
      super(props);
      document.addEventListener("keyup", this.handleKeyboardPress, false);
      document.addEventListener("keydown", this.handleKeyDown, false);
  }

  render()
  {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />  
        <span>{this.state.buffer}</span>
        <div>
          <Display Value={this.state.display} Expression={this.state.expression}></Display>
          <SimpleKeyboard KeyPress={this.keyPress}></SimpleKeyboard>
        </div>
      </header>
    </div>
    )
  }

  // prevent Firefox seachbox appearing by pressing '/' and prevent 'Back' by pressing Backspase
  handleKeyDown = (e) =>
  {
    if (e.keyCode === 191 || e.keyCode === 111 || e.keyCode == 8)
      e.preventDefault();
  }

  handleKeyboardPress = (e) =>
  {
    var keyMapping = { 13: '=', 110: '.', 8: '<-'}
    var val = e.key;
    if (e.keyCode in keyMapping)
      val = keyMapping[e.keyCode];

    this.keyPress(val);
  }

  keyPress = (value) =>
  {
    let keyType = this.detectKeyType(value);
    switch (keyType)
    {
      case 'number': this.numberClick(value); break;
      case 'operator': this.operatorClick(value); break;
      case 'result': this.resultClick(value); break;
      case 'clear': this.clearClick(value); break;
      case 'delete': this.deleteClick(value); break;
      case 'sign': this.signClick(value); break; 
      default: break;
    }
  };

  detectKeyType = (value) => 
  {
    if (value.match(/[0-9.]+/))
      return 'number';
    if (value.match(/^[+\-*/]+/) || value === '÷')
      return 'operator';
    if (value.match(/[=%]+/))
      return 'result';
    if (value === '<-')
      return 'delete';
    if (value === '±')
      return 'sign';
    if (value === 'AC' || value === 'c' || value === 'C')
      return 'clear';
    return 'undefined'
  }

  signClick = (e) =>
  {
    const current = this.state;
    var disp = '';

    if (current.display.match(/^-.*/))
      disp = current.display.substr(1);
    else 
      disp = '-' + current.display;

    this.setState({display: disp});
  }

  deleteClick = (e) => {
    const current = this.state;
    this.setState({display: current.display.substr(0, current.display.length - 1)});
  };

  numberClick = (e) => {
    const   current  = this.state;
    if ((current.display === "0" && e !== '.' ) || current.display.match(/.*[^\d\-.]+.*/))
        current.display = "";

    if (current.display.length > 15 || (e === '.' && current.display.match(/.*\.+.*/)))
      return;

    this.setState({display: current.display += e});
  };

  clearClick = (e) => {
      this.setState({display: "0"});
  };

  operatorClick = (e) => {
      const current = this.state;
      
      this.setState({leftOperand: parseFloat(current.display), operator: e, display: "0", expression: current.display + ' ' + e})
  };

  resultClick = (e) => {
      const current = this.state;
      if (current.leftOperand === undefined)
          return;

      var rightOperand = parseFloat(current.display);

      if (e === '%')
        rightOperand = current.leftOperand / 100 * parseFloat(current.display)
      
      var result = this.calculate(current.leftOperand, rightOperand, current.operator);
      this.setState({display: String(result), leftOperand: undefined, operator: undefined, expression: current.expression + ' ' + rightOperand + ' = ' + result});
  };

  calculate(left, right, operator){
      var result = 0;
      switch(operator){
          case "+": result = left+right; break;
          case "-": result = left-right; break;
          case "*": result = left*right; break;
          case "÷": 
          case "/": result = left/right; break;
          default: break;
      }
      return result;
  }
}

export default App;
