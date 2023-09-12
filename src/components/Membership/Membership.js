import { Component } from "react";
import "./membership.css"
import { BsFillCreditCardFill } from "react-icons/bs";
export class Membership extends Component {
    render() {
        return (
            <div className="membership-container">
                <span className="membership-title">Membership</span>
                <div className="mambership-action-container">
                    <div className="membership-type">
                        <button className="membership-icon"><BsFillCreditCardFill /></button>
                        <span className="membership-action-text">Classic</span>
                    </div>
                    <div className="membership-type">
                        <button className="membership-icon"><BsFillCreditCardFill /></button>
                        <span className="membership-action-text">Silver</span>
                    </div>
                    <div className="membership-type">
                        <button className="membership-icon"><BsFillCreditCardFill /></button>
                        <span className="membership-action-text">Gold</span>
                    </div>
                </div>
            </div>
        )
    }
}