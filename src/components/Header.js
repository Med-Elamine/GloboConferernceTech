import React from "react";
import { Text, View, Image } from "react-native";

import styles from '../containers/styles/sharedStyles';

const Header = (props) => {
    return(
        <View style={styles.sectionContainer}>
            <Image style={styles.headerCompo} source={props.source} />
            <Text style={styles.sectionDescription} >{props.text}</Text>
        </View>
    );
}

export default Header;