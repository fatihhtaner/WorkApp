import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    width: deviceWidth / 1.06,
    height: deviceHeight / 4,
    borderRadius: 7,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
    margin: 3,
    overflow: 'hidden',
  },
  company: {
    fontSize: 13,
    color: 'black',
    marginLeft: 5,
    marginBottom: 3,
  },
  location_container: {
    backgroundColor: '#ef5350',
    borderRadius: 20,
    marginLeft: 5,
    padding: 3,
    alignSelf: 'flex-start',
  },
  location: {
    color: 'white',
  },
  level: {
    alignSelf: 'flex-end',
    color: '#ef5350',
    margin: 5,
    padding: 3,
    flex: 1,
    right: 1,
  },
  button: {
    backgroundColor: '#ef5350',
    borderRadius: 5,
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  text: {
    color: 'white',
  }
});
