import React, {Component} from "react";
import styles from "./Header.module.scss";

export default class Header extends Component {
    render(){
        return(
            <h1 className={styles.header}>Pokedex</h1>
        );
    }
}