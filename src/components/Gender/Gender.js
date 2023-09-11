import { Component } from "react";
import "./gender.css"

export class Gender extends Component {
    render() {
        return (
            <div className="gender-container">
                <span className="gender-title">Gender</span>
                <div className="gender-btn-container">
                    <div className="gender-singlebtn-container">
                        <span className="gender-icon">0</span>
                        <span className="gender-btn-container-text">Male</span>
                    </div>
                    <div>
                        <span className="gender-icon">1</span>
                        <span className="gender-btn-container-text">Female</span>
                    </div>
                </div>
            </div>
        )
    }
}