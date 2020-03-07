import React, { Component } from "react";
import styles from "./SearchBar.module.scss";

export default class SearchBar extends Component {
    render() {
        return (
            <section className={styles.searchSection} >
                <input
                    className={styles.search}
                    placeholder="Search cards..."
                    value={this.props.searchText}
                    onChange={this.props.setSearchText}
                />
                <form className={styles.form} >
                    <p>Search By: </p>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="filter-search"
                                value="name"
                                checked={this.props.selectedOption === "name"}
                                onChange={this.props.handleOptionChange}
                            />
                            Name
                    </label>
                        <label>
                            <input
                                type="radio"
                                name="filter-search"
                                value="category"
                                checked={this.props.selectedOption === "category"}
                                onChange={this.props.handleOptionChange}
                            />
                            Category
                    </label>
                        <label>
                            <input
                                type="radio"
                                name="filter-search"
                                value="weakness"
                                checked={this.props.selectedOption === "weakness"}
                                onChange={this.props.handleOptionChange}
                            />
                            Weakness
                    </label>
                    </div>
                </form>
            </section>
        );
    }
}