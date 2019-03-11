import React, { Component } from "react";
import {FormattedMessage} from "react-intl";

class Hospitals extends Component {
    render() {
        return (
            <div>
                <h2><FormattedMessage
                    id="Hospitals.Title"
                    defaultMessage="Hospitals"
                /></h2>
                <p>The easiest thing to do is post on
                    our <a href="http://forum.kirupa.com">forums</a>.
                </p>
            </div>
        );
    }
}

export default Hospitals;