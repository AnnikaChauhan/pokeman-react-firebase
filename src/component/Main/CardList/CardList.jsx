import React, {Component} from "react";
import Card from "./Card";
import styles from "./CardList.module.scss";

export default class CardList extends Component {
    render(){
        return(
            <section className={styles.cards} >
                {this.props.cardList.map((card,index) => (
                    <Card cardData={card} key={index} />
                ))}
            </section>
        );
    }
}