import React from "react"
import Button from './Button'

const SimpleKeyboard = (props) => (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td><Button Value="AC" KeyType="clear" Click={props.KeyPress} /></td>
                        <td><Button Value="<-" KeyType="delete" Click={props.KeyPress} /></td>
                        <td><Button Value="%" KeyType="result" Click={props.KeyPress} /></td>
                        <td><Button Value="&divide;" KeyType="operator" Click={props.KeyPress} /></td>
                    </tr>
                    <tr>
                        <td><Button Value="7" KeyType="number" Click={props.KeyPress} /></td>
                        <td><Button Value="8" KeyType="number" Click={props.KeyPress} /></td>
                        <td><Button Value="9" KeyType="number" Click={props.KeyPress} /></td>
                        <td><Button Value="*" KeyType="operator" Click={props.KeyPress} /></td>
                    </tr>
                    <tr>
                        <td><Button Value="4" KeyType="number" Click={props.KeyPress} /></td>
                        <td><Button Value="5" KeyType="number" Click={props.KeyPress} /></td>
                        <td><Button Value="6" KeyType="number" Click={props.KeyPress} /></td>
                        <td><Button Value="-" KeyType="operator" Click={props.KeyPress} /></td>
                    </tr>
                    <tr>
                        <td><Button Value="1" KeyType="number" Click={props.KeyPress} /></td>
                        <td><Button Value="2" KeyType="number" Click={props.KeyPress} /></td>
                        <td><Button Value="3" KeyType="number" Click={props.KeyPress} /></td>
                        <td><Button Value="+" KeyType="operator" Click={props.KeyPress} /></td>
                    </tr>
                    <tr>
                        <td><Button Value="." KeyType="number" Click={props.KeyPress} /></td>
                        <td><Button Value="0" KeyType="number" Click={props.KeyPress} /></td>
                        <td><Button Value="&plusmn;" KeyType="sign" Click={props.KeyPress} /></td>
                        <td><Button Value="=" KeyType="result" Click={props.KeyPress} /></td>
                    </tr>
                   
                    </tbody>
                </table>
            </div>
        );

export default SimpleKeyboard;