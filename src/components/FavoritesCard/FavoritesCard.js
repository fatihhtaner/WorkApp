import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './FavoritesCard.style';
import {useDispatch} from 'react-redux';
import {deleteFavorite} from '../../redux/store/favoriteSlice';

function FavoritesList({item, name}) {
    const dispatch = useDispatch();
    const itemDelete = () => {
        dispatch(
            deleteFavorite({
                name: name
            })
        )
    }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.company}>{item.company.name}</Text>
      <View style={styles.location_container}>
        <Text style={styles.location}>{item.location}</Text>
      </View>
      <Text style={styles.level}>{item.level}</Text>
      <TouchableOpacity style={styles.button} onPress={() => itemDelete(item.name)}>
        <Text style={styles.text}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FavoritesList;
