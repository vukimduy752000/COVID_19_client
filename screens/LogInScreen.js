import React, { useState, Children } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'
import { TextInput, Avatar, Button } from 'react-native-paper'
import { AuthenticationContext } from '../components/context'
import Users from './Users'


const LogInScreen = ({ navigation }) => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })
    
    const handleUsernameChange = (val) => {
        return (
            setUserData({
                ...userData,
                username: val,
            })
        )
    }

    const { signIn } = React.useContext(AuthenticationContext);

    const handlePasswordChange = (val) => {
        return (
            setUserData({
                ...userData,
                password: val,
            })
        )
    }

    //loop through the user data object file and get the value
    const handleLogin = (username, password) => {
        const matchUser = Users.filter(item => (
            username == item.username
            && password == item.password))

        if (userData.username.trim().length == 0 || userData.password.trim().length == 0) {
            Alert.alert('Username or Password must be filled')
        }

        if (matchUser.length == 0) {
            Alert.alert('Invalid Account!', 'Username or Password is incorrect.', [{
                text: "Try again"
            }])
        }
        console.log(matchUser)
        //set the current object found and match the local storage
        signIn(matchUser)

    }

    return (
        //dismiss the keyboard
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Avatar.Image
                        size={300}
                        source={require('../images/logo.png')} />
                </View>

                <View style={styles.body}>
                    <TextInput style={{ marginBottom: 5, backgroundColor: '#fff' }}
                        label="Email"
                        placeholder="Type your email"
                        autoCapitalize="none"
                        onChangeText={val => handleUsernameChange(val)}

                    ></TextInput>

                    <TextInput style={{ marginBottom: 50, backgroundColor: '#fff' }}
                        label="Password"
                        secureTextEntry="true"
                        placeholder="Type your Password"
                        autoCapitalize="none"
                        onChangeText={val => handlePasswordChange(val)}
                    ></TextInput>

                    <Button style={{
                        height: 50,
                        marginBottom: 10,
                    }}
                        icon="login"
                        mode="contained" onPress={() => { handleLogin(userData.username, userData.password) }}> Log in</Button>
                    <Button style={{
                        height: 50,
                        marginBottom: 10,
                        backgroundColor: 'transparent',
                    }}
                        icon="newspaper"
                        mode="outlined" onPress={() => navigation.navigate('SignUpScreen')} >Sign up</Button>

                </View>

            </View>
        </TouchableWithoutFeedback>

    )
}

export default LogInScreen;
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





