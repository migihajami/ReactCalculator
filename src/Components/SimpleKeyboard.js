import React from "react"
import Button from './Button'

const SimpleKeyboard = (props) => (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td><Button Value="AC" Click={props.KeyPress} /></td>
                        <td><Button Value="<-" Click={props.KeyPress} /></td>
                        <td><Button Value="%"  Click={props.KeyPress} /></td>
                        <td><Button Value='&#247;'  Click={props.KeyPress} /></td>
                    </tr>
                    <tr>
                        <td><Button Value="7" Click={props.KeyPress} /></td>
                        <td><Button Value="8" Click={props.KeyPress} /></td>
                        <td><Button Value="9" Click={props.KeyPress} /></td>
                        <td><Button Value="*"  Click={props.KeyPress} /></td>
                    </tr>
                    <tr>
                        <td><Button Value="4" Click={props.KeyPress} /></td>
                        <td><Button Value="5" Click={props.KeyPress} /></td>
                        <td><Button Value="6" Click={props.KeyPress} /></td>
                        <td><Button Value="-" Click={props.KeyPress} /></td>
                    </tr>
                    <tr>
                        <td><Button Value="1" Click={props.KeyPress} /></td>
                        <td><Button Value="2" Click={props.KeyPress} /></td>
                        <td><Button Value="3" Click={props.KeyPress} /></td>
                        <td><Button Value="+" Click={props.KeyPress} /></td>
                    </tr>
                    <tr>
                        <td><Button Value="." Click={props.KeyPress} /></td>
                        <td><Button Value="0" Click={props.KeyPress} /></td>
                        <td><Button Value="&plusmn;" Click={props.KeyPress} /></td>
                        <td><Button Value="=" Click={props.KeyPress} /></td>
                    </tr>
                   
                    </tbody>
                </table>
            </div>
        );

export default SimpleKeyboard;