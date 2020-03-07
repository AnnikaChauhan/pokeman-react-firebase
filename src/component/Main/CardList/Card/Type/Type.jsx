import React, { Component } from "react";

export default class Type extends Component {
    render() {
        return (
            <article>
                <h4>Type</h4>
                {Object.entries(this.props.type).map((entry, index) => {
                    //console.log(entry[1]);
                    return <p key={index}>- {entry[1]}</p>
                })}
            </article>
        );
    }
}