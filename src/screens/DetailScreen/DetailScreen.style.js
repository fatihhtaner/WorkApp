import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  title_container: {
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    margin: 3,
  },
  location_title: {
    color: '#ef5350',
    margin: 3,
  },
  level_title: {
    color: '#ef5350',
    margin: 3,
  },
  location: {
    color: 'black',
    fontWeight: 'bold',
  },
  level: {
    color: 'black',
    fontWeight: 'bold',
  },
  job_detail: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 2,
    color: 'black',
  },
  button_container: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ef5350',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 18,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
});