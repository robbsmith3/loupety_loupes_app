import { useState } from 'react';
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image, 
  FlatList
 } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const presetTypes = ["Preset 1", "Preset 2", "Preset 3"]

const Welcome = () => {
  const router = useRouter();
  const [activePresetType, setActivePresetType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userGreeting}>Hello Robb,</Text>
        <Text style={styles.presetMessage}>Select your preset:</Text>
      </View>

      {/* <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View> */}

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

export default Welcome