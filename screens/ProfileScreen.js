import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';


// Import external source Font Awesome
import Icon from 'react-native-vector-icons/Ionicons'

export default ProfileScreen = ({ navigation }) => {
    return (
        <View styles={styles.container}>
            <Text>Profile Screen</Text>
            <Button
                onPress={() => navigation.push("ProfileScreen")} title="Go to Profile Screen"></Button>
            <Button
                onPress={() => navigation.goBack()} title="Go back to the previous" ></Button>
            <Button
                title="Go to home"
                onPress={() => navigation.popToTop()} title="Go back to the top stack" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});