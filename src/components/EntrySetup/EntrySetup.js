import { Component } from "react";
import "./entrysetup.css"
import { GrCloudlinux } from "react-icons/gr";
import { FaCircleChevronRight } from "react-icons/fa6";

export class EntrySetup extends Component {
    render() {
        return (
            <div className="entry-setup">
                <span className="image"><GrCloudlinux /></span>
                <div className="entrytext-container">
                    <span className="entry-tytle">Let's get you set up </span>
                    <span className="entry-text">It should only take a couple of minutes to pair with your watch</span>
                </div>
                <span className="arrow-icon"><FaCircleChevronRight /></span>
            </div>
        )
    }
}