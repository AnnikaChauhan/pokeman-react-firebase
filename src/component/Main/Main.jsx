import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CardList from "./CardList/CardList";

export default class Main extends Component {
    render() {
        return (
            <section>
                <SearchBar />
                <CardList />
            </section>
        );
    }
}