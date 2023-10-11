import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './preset.style';
import { COLORS, SIZES } from '../../../constants';
import PresetCard from '../../common/cards/popular/PresetCard';

const Preset = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}></Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Create Preset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={({ item }) => (
              <PresetCard
                item={ item }
              />
            )}
          keyExtractor={item => item?.preset_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          vertical
          />
        )}
      </View>
    </View>
  )
}

export default Preset