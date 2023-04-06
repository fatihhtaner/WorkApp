import React from 'react';
import {Text, FlatList, SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import FavoritesCard from '../../components/FavoritesCard/FavoritesCard'

function FavoritesScreen() {
  const list = useSelector(s => s.favorites);
  console.log(list)

  const renderItem = ({item}) => {
    return (
      <FavoritesCard item={item}/>
    );
  }
  return (
    <SafeAreaView>
      <FlatList data={list} renderItem={renderItem} keyExtractor={(item) => item.name}/>
    </SafeAreaView>
  )
}

export default FavoritesScreen;