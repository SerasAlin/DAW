import React, { Component } from "react";
import {FormattedMessage} from "react-intl";

class Doctors extends Component {
    render() {
        return (
            <div>
                <h2><FormattedMessage
                    id="Doctors.Title"
                    defaultMessage="Doctors"
                /></h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
            </div>
        );
    }
}

export default Doctors;