import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CardList from "./CardList/CardList";
import styles from "./Main.module.scss";
import firebase, { firestore } from "../../firebase";

export default class Main extends Component {
    state = {
        cards: [],
        filteredCards: [],
        searchText: "",
        selectedOption: "name"
    }

    setSearchText = (event) => {
        const searchText = event.target.value.toLowerCase();
        this.setState({ searchText }, this.filteredCards);
    }

    filteredCards = () => {
        if(this.state.selectedOption === "name"){
            let filteredCards = this.state.cards.filter(card => {
                return card.name.toLowerCase().includes(this.state.searchText);
            })
            //console.log(filteredCards);
            this.setState({ filteredCards });
        } else if(this.state.selectedOption === "category"){
            let filteredCards = this.state.cards.filter(card => {
                return card.category.toLowerCase().includes(this.state.searchText);
            })
            //console.log(filteredCards);
            this.setState({ filteredCards });
        } else if(this.state.selectedOption === "weakness"){
            //this one only works if you type the full weakness in
            let filteredCards = this.state.cards.filter(card => {
                let weaknessLoop = card.weakness.filter(weakness => {
                    return weakness.includes(this.state.searchText);
                });
                //console.log(weaknessLoop);
                return card.weakness.includes(this.state.searchText);
            })
            //console.log(filteredCards);
            this.setState({ filteredCards });
        }
        
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    componentDidMount() {
        firestore
            .collection("pokedex")
            .get()
            .then((query) => {
                const cards = query.docs.map(doc => doc.data());
                //console.log(cards[0].name);
                this.setState({
                    cards: cards,
                    filteredCards: cards
                });
            })
    }

    render() {
        return (
            <section className={styles.main}>
                <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} selectedOption={this.state.selectedOption} handleOptionChange={this.handleOptionChange} />
                <CardList cardList={this.state.filteredCards} />
            </section>
        );
    }
}