import React, {Component} from "react";

export default class Weakness extends Component {
    render(){
        return(
            <article>
                <h4>Weakness</h4>
                {Object.entries(this.props.weakness).map((entry, index) => {
                    //console.log(entry);
                    return <p key={index}>- {entry[1]}</p>
                })}
            </article>
        );
    }
}