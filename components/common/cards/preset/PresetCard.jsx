import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './PresetCard.style'

const PresetCard = () => {
    const router = useRouter();

    const [selectedPreset, setSelectedPreset] = useState();

    const handleCardPress = (item) => {
        router.push(`/preset-details/${item.preset_id}`);
        setSelectedPreset(item.preset_id);
    };
    return (
        <TouchableOpacity
            style={styles.container(selectedPreset, item)}
            onPress={() => handleCardPress(item)}
        >
            
        </TouchableOpacity>
    )
}