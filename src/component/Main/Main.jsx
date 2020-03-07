import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CardList from "./CardList/CardList";
import styles from "./Main.module.scss";
import firebase, { firestore } from "../../firebase";

export default class Main extends Component {
    state = {
        cards: [],
        searchText: "",
        selectedOption: "name",
        filteredCards: []
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
        //console.log(this.state.selectedOption);
        return (
            <section className={styles.main}>
                <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
                <form>
                    <label>Search By: </label>
                    <label>
                        <input 
                            type="radio"
                            name="filter-search"
                            value="name"
                            checked={this.state.selectedOption === "name"}
                            onChange={this.handleOptionChange}
                        />
                        Name
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="filter-search"
                            value="category"
                            checked={this.state.selectedOption === "category"}
                            onChange={this.handleOptionChange}
                        />
                        Category
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="filter-search"
                            value="weakness"
                            checked={this.state.selectedOption === "weakness"}
                            onChange={this.handleOptionChange}
                        />
                        Weakness
                    </label>
                </form>
                <CardList cardList={this.state.filteredCards} />
            </section>
        );
    }
}