import React from 'react';
import {Text, View, SectionList, Image} from 'react-native';
import {sessions} from '../data/sessions.json';
import styles from '../containers/styles/sharedStyles';

function Sessions() {

  const SectionHeader = ({section}) => {
    return(
      <View style={{width:'100%',backgroundColor: 'red'}}>
      <Text style={styles.headerTitle} >
        {section.title}
      </Text>
      </View>
    );
  }

  const SeparatorCompo = () => {
    return <View style={styles.separatorStyle} />;
};

const HeaderCompo = () => {
    return (
    <View style={styles.sectionContainer}>
        <Image style= {styles.headerCompo}
        source={require('../images/girl.png')}/>
        <Text style={styles.sectionDescription}>Speakers Lineup!!</Text>
    </View>);
};

const FooterCompo = () => {
    return (
    <View style={styles.sectionContainer}>
        <Image style= {styles.headerCompo}
        source={require('../images/ytb.png')}/>
        <Text style={styles.sectionDescription}>All right reserved by aminel</Text>
    </View>);
};

  const sessionItem = ({item,index}) => {
    return(
      <View>
        <SessionList id={index} name={item.title} desc={item.description} speaker={item.speakers[0].name} />
      </View>
    );
  }

  const SessionList = (props) => {
    return(
      <View style={styles.sectionContainer}>
        <Text style={styles.headerContainer}>Session Name : {props.name}</Text>
        <Text style={styles.headerContainer}>Session Details : {props.desc}</Text>
        <Text style={styles.headerContainer}>Session Speaker : {props.speaker}</Text>
      </View>
    );
  }

  return( 
    <View>
      <SectionList
      sections={sessions}
      renderItem={sessionItem}
      renderSectionHeader={SectionHeader}
      stickySectionHeadersEnabled={true}
      keyExtractor={(item, index) => index}
      ListFooterComponent={FooterCompo}
      ListHeaderComponent={HeaderCompo}
      ItemSeparatorComponent={SeparatorCompo}
      />
    </View>
  );
  }

export default Sessions;
