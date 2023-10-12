import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Preset, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite }, 
                    headerShadowVisible: false,
                    headerLeft : () => (
                        <ScreenHeaderBtn iconUrl={icons.settings_gear} dimension="60%" />
                    ),
                    headerRight : () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: "El Toston"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                    style={{
                        flex: 1,
                        padding: SIZES.xxLarge
                    }}
                >
                    <Welcome  />
                    <Preset />
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}

export default Home;