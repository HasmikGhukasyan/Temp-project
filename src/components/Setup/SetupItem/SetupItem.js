import { Component } from "react";
import "./setupitem.css"

export class SetupItem extends Component {
    render() {
        return (
            <div className="setup-item">
                <span className="setup-item-title">{this.props.name}</span>
                <input className="setup-item-input" placeholder={this.props.placeholder}></input>
            </div>
        )
    }
}