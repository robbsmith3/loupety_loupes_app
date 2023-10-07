import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './PresetCard.style'

const PresetCard = ({ item, selectedPreset, handleCardPress }) => {
    return (
        <TouchableOpacity
            style={styles.container(selectedPreset, item)}
            onPress={() => handleCardPress(item)}
        >
            
        </TouchableOpacity>
    )
}