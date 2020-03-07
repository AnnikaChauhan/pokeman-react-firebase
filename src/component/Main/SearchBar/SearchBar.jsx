import React, { Component } from "react";
import styles from "./SearchBar.module.scss";

export default class SearchBar extends Component {
    render() {
        return (
            <section className={styles.searchbar}>
                <input
                    placeholder="Search cards..."
                    value={this.props.searchText}
                    onChange={this.props.setSearchText}
                />
            </section>
        );
    }
}