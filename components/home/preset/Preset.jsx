import { useState } from 'react';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './preset.style';
import { COLORS, SIZES } from '../../../constants';
import PresetCard from '../../common/cards/preset/PresetCard';

const presetTypes = ["Preset 1", "Preset 2", "Preset 3"]

const Preset = () => {
  const router = useRouter();
  const [activePresetType, setActivePresetType] = useState('Full-time')

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}></Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Create Preset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={presetTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activePresetType, item)}
              onPress={() => {
                setActivePresetType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activePresetType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ rowGap: SIZES.xLarge}}
          vertical
        />
      </View>
    </View>
  )
}

export default Preset