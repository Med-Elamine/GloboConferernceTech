/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';

import styles from './styles/sharedStyles.js';

function Story() {
  return (
    <ScrollView
      ref={(a) => (this.scroll = a)}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
      stickyHeaderIndices={[0]}
      indicatorStyle= "white"
      pagingEnabled= {true}
      >
      <View>
      <Image
        style={styles.storyImageSmall}
        source={require('../images/shutterstock_211091626.png')}
      />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleStory}>Our Story</Text>
          <Text style={styles.sectionDescriptionStory}>
            Conference by nerds for nerds!
          </Text>
        </View>
      </View>
      </View>
      <View style={styles.body}>
      <Pressable
          onPress={() =>
            this.scroll.scrollToEnd({animated: false})
          }>
          <Text style={styles.sectionDescriptionStory}>Go To End</Text>
        </Pressable>
          <Text style={styles.sectionDescriptionStory}>
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
          </Text>
          <Text style={styles.sectionDescriptionStory}>
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
            Conference by nerds for nerds!
            Whether to use the legacy implementation based on Reanimated 1. The new implementation based on Reanimated 2 will perform better, but you need additional configuration and need to use Hermes with Flipper to debug.
          </Text>
          <Text style={styles.sectionDescriptionStory}>
            End of the story !
          </Text>
          <Pressable
          onPress={() =>
            this.scroll.scrollTo({x: 0,y: 0, animated: false})
          }>
          <Text style={styles.sectionDescriptionStory}>Go To Top</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Story;
