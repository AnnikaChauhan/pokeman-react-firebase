import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CardList from "./CardList/CardList";
import styles from "./Main.module.scss";
import firebase, {firestore} from "../../firebase";

export default class Main extends Component {
    state = {
        cards: [],
        searchText: "",
        filteredCards: []
    }

    setSearchText = (event) => {
        const searchText = event.target.value.toLowerCase();
        this.setState({ searchText } , this.filteredCards);
    }

    filteredCards = () => {
        let filteredCards = this.state.cards.filter( card => {
            return card.name.toLowerCase().includes(this.state.searchText);
        })
        console.log(filteredCards);
        this.setState({ filteredCards });
    }

    componentDidMount(){
        firestore
            .collection("pokedex")
            .get()
            .then((query) => {
                const cards = query.docs.map(doc => doc.data());
                //console.log(cards[0].name);
                this.setState({ cards });
            })
    }

    render() {
        return (
            <section className={styles.main}>
                <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
                <CardList cardList={this.state.filteredCards} />
            </section>
        );
    }
}