import React, {Component} from "react";
import styles from "./Card.module.scss";
import Type from "./Type/Type";
import Weakness from "./Weakness/Weakness";

export default class Card extends Component {
    render(){
        //console.log(this.props);
        const cardData = this.props.cardData;
        return(
            <article className={styles.card}>
                <h3>{cardData.name}</h3>
                <img alt={cardData.name} src={cardData.picture} />
                <p>Category: {cardData.category}</p>
                <p>Weight: {cardData.weight} lb</p>
                <br/>
                <Type type={this.props.cardData.type} />
                <br/>
                <Weakness weakness={this.props.cardData.weakness} />
            </article>
        );
    }
}