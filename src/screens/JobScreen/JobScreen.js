import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import JobList from '../../components/JobList/JobList';
import styles from './JobScreen.style';
import {useNavigation} from '@react-navigation/native';

function JobScreen() {
  const navigation = useNavigation();

  const {data, error, loading} = useFetch(
    'https://www.themuse.com/api/public/jobs?page=0',
  );

  if (loading) {
    return (
      <ActivityIndicator
        color={'#ee5b5a'}
        size={'large'}
        style={styles.loading}
      />
    );
  }

  const renderJobs = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', item)}>
      <JobList job={item} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList data={data.results} renderItem={renderJobs} />
      </View>
    </SafeAreaView>
  );
}

export default JobScreen;
