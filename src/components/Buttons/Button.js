import { Component } from "react";
import "./button.css"

export class Button extends Component {
    render() {
        return (
            <div className="btn-container">
                <button className="btn-1 btn">Cancel</button>
                <button className="btn-2 btn">Save</button>
            </div>
        )
    }
}