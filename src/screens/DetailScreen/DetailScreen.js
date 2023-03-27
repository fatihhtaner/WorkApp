import React from 'react';
import {
  Alert,
  Text,
  useWindowDimensions,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import styles from './DetailScreen.style';
import {useDispatch} from 'react-redux';

function DetailScreen() {
  const route = useRoute();
  const {width} = useWindowDimensions();

  const source = {
    html: `${route.params.contents}`,
  };

  const dispatch = useDispatch();
  const handleAdd = () => {
    Alert.alert('Favorilere başarıyla eklendi!'),
      dispatch({type: 'ADD_FAVORITE', payload: {favorite: route.params.name}});
  };

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.title_container}>
          <Text style={styles.title}>{route.params.name}</Text>
          <Text style={styles.location_title}>
            Locations:{' '}
            <Text style={styles.location}>
              {route.params.locations[0].name}
            </Text>
          </Text>
          <Text style={styles.level_title}>
            Job Level:{' '}
            <Text style={styles.level}>{route.params.levels[0].name}</Text>
          </Text>
          <Text style={styles.job_detail}>Job Detail</Text>
        </View>
        <View>
          <RenderHtml
            baseStyle={styles.content}
            contentWidth={width}
            source={source}
          />
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', alignSelf: 'center'}}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <Text style={{color: 'white', alignSelf: 'center'}}>
              Favorite Job
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailScreen;
