import { Component } from "react";
import "./gender.css"
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

export class Gender extends Component {
    render() {
        return (
            <div className="gender-container">
                <span className="gender-title">Gender</span>
                <div className="gender-btn-container">
                    <div className="gender-singlebtn-container">
                        <span className="gender-icon"><BsGenderMale /></span>
                        <span className="gender-btn-container-text">Male</span>
                    </div>
                    <div className="gender-singlebtn-container">
                        <span className="gender-icon"><BsGenderFemale /></span>
                        <span className="gender-btn-container-text">Female</span>
                    </div>
                </div>
            </div>
        )
    }
}