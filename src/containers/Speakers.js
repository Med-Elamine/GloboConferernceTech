/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, FlatList, SafeAreaView, Image, TextInput, Pressable} from 'react-native';
import {speakers} from '../data/speakers.json';
import styles from '../containers/styles/sharedStyles';
import Header  from '../components/Header';
import { createRef } from 'react/cjs/react.production.min';

function Speakers() {

    const SpeakerList = (props) => {
        return (
        <View style={styles.sectionContainer} key={props.id}>
            <Text style={styles.sectionTitle}>Speaker Name : {props.name}</Text>
            <Text style={styles.sectionDescription}>Speaker Bio : {props.bio}</Text>
            <Text style={styles.sectionDescription}>Session Name : {props.session}</Text>
        </View>
        );
    };

    const speakerItem = ({item, index}) => {
        return (
            <View>
                <SpeakerList id={index} name={item.name} bio={item.bio} session={item.sessions[0].name} />
            </View>
        );
    };

    const SeparatorCompo = () => {
        return <View style={styles.separatorStyle} />;
    };

    const HeaderCompo = () => {
        return (
            <Header text= 'Speakers Lineup!!'
            source={require('../images/girl.png')}/>);

    };

    const FooterCompo = () => {
        return (
        <View style={styles.sectionContainer}>
            <Image style= {styles.headerCompo}
            source={require('../images/ytb.png')}/>
            <Text style={styles.sectionDescription}>All right reserved by aminel</Text>
        </View>);
    };


    const [filteredSpeakers, setFilteredSpeakers] = useState(speakers);

    const getSearchText = (text) => {
        let filteredSpeakersList = speakers.filter((value) => 
        value.sessions[0].name.toLowerCase().includes(text.toLowerCase()),);
        setFilteredSpeakers(filteredSpeakersList);
    }

  return (
      <SafeAreaView>
        <SearchSessions getSearchText={getSearchText}/>
        <FlatList
        keyboardDismissMode='on-drag'
        data={filteredSpeakers}
        keyExtractor={(item) => item.id}
        renderItem={speakerItem}
        ItemSeparatorComponent={SeparatorCompo}
        ListHeaderComponent={HeaderCompo}
        ListFooterComponent={FooterCompo}
        />
      </SafeAreaView>
  );
}

const SearchSessions = (props) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);
        props.getSearchText(text);
    };

    const clearSearch = () => {
        setSearchText('');
        props.getSearchText('');
    };


    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.searchInput}
                value={searchText}
                onChangeText={(text) => handleSearch(text)}
                placeholder= "Search Sessions"
                returnKeyType={'go'}
                autoFocus={false}
                autoCorrect={false}
                multiline={false}
                selectionColor={'red'}
            />
        <Pressable style={styles.clearContainer}
        onPress={clearSearch}>
            <Image style={styles.clearImage} source={require('../images/multiply-1_Orange.png')} />
        </Pressable>
        </View>
    );
};


export default Speakers;
