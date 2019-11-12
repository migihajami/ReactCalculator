import React from "react"
import Button from './Button'

const SimpleKeyboard = (props) => (
            <div>
                <table>
                    <tbody>
                    <tr>
                        {['AC', '<-', '%', '/'].map((a) => <td><Button Value={a} Click={props.KeyPress} /></td>)}
                    </tr>
                    <tr>
                        {['7', '8', '9', '*'].map((a) => <td><Button Value={a} Click={props.KeyPress} /></td>)}
                    </tr>
                    <tr>
                        {['4', '5', '6', '-'].map((a) => <td><Button Value={a} Click={props.KeyPress} /></td>)}
                    </tr>
                    <tr>
                        {['1', '2', '3', '+'].map((a) => <td><Button Value={a} Click={props.KeyPress} /></td>)}
                    </tr>
                    <tr>
                        {['.', '0', '±', '='].map((a) => <td><Button Value={a} Click={props.KeyPress} /></td>)}
                    </tr>
                    </tbody>
                </table>
            </div>
        );

export default SimpleKeyboard;