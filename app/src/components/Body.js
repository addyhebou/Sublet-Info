import React, { Component } from 'react'
import Steps from "./Steps.js";
export default class Header extends Component {
    render() {
        return (
            <div className = "Body">
                <p>Thank you so much for your interest in “Addy’s Room”, the summer sublet room that will run from August 11, 2021 - August 31, 2021 (20 days).</p>
                <strong>APPLICATION DEADLINE: July 27</strong>
                <br/>
                <strong>Decisions by: July 29</strong>
                <p><strong>Sublet Application Process</strong></p>
                <p>To give you insight, this is how the entire process will go:</p>
                <Steps/>
            </div>
        )
    }
}
