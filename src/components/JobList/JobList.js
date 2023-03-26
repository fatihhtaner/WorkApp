import React from 'react';
import {View, Text} from 'react-native';
import styles from './JobList.style'

function JobList({job}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{job.name}</Text>
      <Text style={styles.company}>{job.company.name}</Text>
      <View style={styles.location_container}>
        <Text style={styles.location}>{job.locations[0].name}</Text>
      </View>
      <Text style={styles.level}>{job.levels[0].name}</Text>
    </View>
  );
}

export default JobList;
