import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  separatorStyle: {
    height: 2,
    backgroundColor: 'red',
    paddingTop: 2,
    marginTop: 25,
  },
  headerCompo: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  imagehome: {
    width: 180,
    height: 100,
    resizeMode: 'stretch',
    position: 'relative',
    alignSelf: 'center',
  },
  scrollView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  sectionTitleStory: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  sectionDescriptionStory: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  storyImage: {
    width: 700,
    height: 700,
    resizeMode: 'cover',
    position: 'absolute',
  },
  storyImageSmall: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonWrapper: {
    marginTop: 200,
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: 'lightsalmon',
    padding: 5,
    paddingTop: 15,
    marginTop: 20,
    paddingBottom: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
  },
  headerContainer: {
    paddingHorizontal: 25,
    marginBottom: 10,
    backgroundColor: 'lightsalmon',
    borderRadius: 6,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
  },
});
