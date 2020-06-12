import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


// Import external source Font Awesome
import Icon from 'react-native-vector-icons/Ionicons'
// import { ImageCovid } from '../screens/DataSource/ImageCovid'
export default ProfileScreen = ({ navigation }) => {

    ImageCovid = [
        {
            id: 1,
            fileURL: require('../images/Cov19-Packages/Cov19-Eng_MOH1.jpg')
        },
        {
            id: 2,
            fileURL: require('../images/Cov19-Packages/Cov19-Eng_MOH2.jpg')
        },
        {
            id: 3,
            fileURL: require('../images/Cov19-Packages/Cov19-Eng_MOH3.jpg')
        },
        {
            id: 4,
            fileURL: require('../images/Cov19-Packages/Cov19-Eng_MOH4.jpg')
        },
        {
            id: 5,
            fileURL: require('../images/Cov19-Packages/Cov19-Eng_MOH5.jpg')
        },
        {
            id: 6,
            fileURL: require('../images/Cov19-Packages/Cov19-Eng_MOH6.jpg')
        },
    ]
    
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#0377a8', '#2fb5c7']}
                style={[StyleSheet.absoluteFill, styles.linearGradient,]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />
            <FlatList
                data={ImageCovid}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <Image style={styles.imageItem} source={item.fileURL}></Image>} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        borderColor: '#fff',
    },

    imageItem: {
        width: "100%",
        resizeMode: 'stretch',
        height: 700,
        marginBottom: 8,
        borderRadius: 10,
        borderWidth: 1,
    }
});