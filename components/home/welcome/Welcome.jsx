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
import Preset from '../preset/Preset';

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userGreeting}>Hello Robb,</Text>
        <Text style={styles.presetMessage}>Select your preset:</Text>
      </View>

      {/*Search bar*/}
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
 
    </View>
  )
}

export default Welcome