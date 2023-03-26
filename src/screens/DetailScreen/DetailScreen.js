import React from 'react';
import {
  Text,
  useWindowDimensions,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import styles from './DetailScreen.style';

function DetailScreen() {
  const route = useRoute();
  const {width} = useWindowDimensions();

  const source = {
    html: `${route.params.contents}`,
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
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Favorite Job</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailScreen;
