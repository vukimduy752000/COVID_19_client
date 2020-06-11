import React, { useState, Children } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import { TextInput, Avatar, Button } from 'react-native-paper'
import { AuthenticationContext } from '../components/context'

const SignUpScreen = ({ navigation }) => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        confirmPassword: ',',
    })

    const { signUp } = React.useContext(AuthenticationContext)

    //handle text input change from 3 textbox
    const handleUsernameChange = (val) => {
        if (val.length !== 0) {
            setUserData({
                ...userData,
                username: val,
            })
        }
    }

    const handlePasswordChange = (val) => {
        return (
            setUserData({
                ...userData,
                password: val,
            })
        )
    }

    const handleConfirmPasswordChange = (val) => {

    }
    return (
        //dismiss the keyboard
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Avatar.Image
                        size={300}
                        source={require('../images/logoLogin.jpg')} />
                </View>

                <View style={styles.body}>
                    <TextInput style={{ marginBottom: 5, backgroundColor: '#fff' }}
                        label="Email"
                        placeholder="Type your email"
                        autoCapitalize="none"
                        onChangeText={val => handleUsernameChange(val)}

                    ></TextInput>
                    <TextInput style={{ marginBottom: 5, backgroundColor: '#fff' }}
                        label="Password"
                        placeholder="Type your password"
                        secureTextEntry="true"
                        onChangeText={val => handlePasswordChange(val)}

                    ></TextInput>

                    <TextInput style={{ marginBottom: 50, backgroundColor: '#fff' }}
                        label="ConfirmPassword"
                        secureTextEntry="true"
                        placeholder="Type your Password"
                        onChangeText={val => handleConfirmPasswordChange(val)}
                    ></TextInput>

                    <Button style={{
                        height: 50,
                        marginBottom: 10,
                    }}
                        icon="account-box-outline"
                        mode="contained" onPress={() => signUp()}>Register</Button>


                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    logo: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 30,
    },

    body: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },

})





