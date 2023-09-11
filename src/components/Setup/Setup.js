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
                <SetupItem />
                <Gender />
                <SetupItem />
                <SetupItem />
                <SetupItem />
                <SetupItem />
                <Membership />
                <Button />
            </div>
        )
    }
}