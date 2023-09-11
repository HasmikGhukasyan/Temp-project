import { Component } from "react";
import "./setupitem.css"

export class SetupItem extends Component {
    render() {
        return (
            <div className="setup-item">
                <span className="setup-item-title">Name</span>
                <input className="setup-item-input"></input>
            </div>
        )
    }
}