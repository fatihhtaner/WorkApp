import React from 'react';
import {Text, FlatList, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

function FavoritesScreen() {
  const list = useSelector(s => s.favoriteList);

  return (
    <SafeAreaView>
      <FlatList data={list} renderItem={({item}) => <Text>{item}</Text>}/>
    </SafeAreaView>
  )
}

export default FavoritesScreen;