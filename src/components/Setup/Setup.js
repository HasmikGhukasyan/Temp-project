import { Component } from "react";
import { SetupItem } from "./SetupItem/SetupItem";
import { Gender } from "../Gender/Gender";
import { Membership } from "../Membership/Membership";
import { Button } from "../Buttons/Button";
import "./setup.css"

export class Setup extends Component {
    render() {
        return (
            <div className="setup-container">
                <SetupItem placeholder="John Smith" name="Name" />
                <Gender />
                <SetupItem placeholder="17/11/1998" name="Date of birth" />
                <SetupItem placeholder="hasmikghukasyan@yahoo.com" name="Email" />
                <SetupItem placeholder="+37455-41-11-51" name="Mobile" />
                <SetupItem placeholder="6711980581" name="Identifier" />
                <Membership />
                <Button />
            </div>
        )
    }
}