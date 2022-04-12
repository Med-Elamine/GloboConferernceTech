/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, FlatList, SafeAreaView, Image} from 'react-native';
import {speakers} from '../data/speakers.json';
import styles from '../containers/styles/sharedStyles';
import Header  from '../components/Header';

function Speakers() {

    const SpeakerList = (props) => {
        return (
        <View style={styles.sectionContainer} key={props.id}>
            <Text style={styles.sectionTitle}>Speaker Name : {props.name}</Text>
            <Text style={styles.sectionDescription}>Speaker Bio : {props.bio}</Text>
        </View>
        );
    };

    const speakerItem = ({item, index}) => {
        return (
            <View>
                <SpeakerList id={index} name={item.name} bio={item.bio} />
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

  return (
      <SafeAreaView>
        <FlatList
        data={speakers}
        keyExtractor={(item) => item.id}
        renderItem={speakerItem}
        ItemSeparatorComponent={SeparatorCompo}
        ListHeaderComponent={HeaderCompo}
        ListFooterComponent={FooterCompo}
        />
      </SafeAreaView>
  );
}

export default Speakers;
