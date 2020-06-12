import React, { userState, useEffect } from 'react';
import { View,  StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {AuthenticationContext} from '../components/context'

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
} from 'react-native-paper'

export function DrawerContent(props) {

    const { signOut } = React.useContext(AuthenticationContext)

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerTopContent}>
                    <View style={styles.userInformationSection} >
                        <View style={styles.avatar}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                                }}
                                size={50} />
                            <View style={{ marginLeft: 15, flexDirection: "column" }}>
                                <Title>Vu Kim Duy</Title>
                                <Caption>@duyvukim</Caption>
                            </View>
                        </View>

                        <Drawer.Section>
                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>Student ID:</Paragraph>
                                    <Caption style={styles.caption}>7147</Caption>
                                </View>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>Student Email:</Paragraph>
                                    <Caption style={styles.caption}>7147@ait.nsw.edu.au </Caption>
                                </View>
                            </View>
                        </Drawer.Section>
                    </View>

                    <Drawer.Section>

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-variant"
                                    size={size}
                                    color={color} />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate("HomeScreen") }} />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="thumb-up"
                                    size={size}
                                    color={color} />
                            )}
                            label="Safety Instruction"
                            onPress={() => { props.navigation.navigate("InstructionScreen") }} />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="compass"
                                    size={size}
                                    color={color} />
                            )}
                            label="Explore"
                            onPress={() => { props.navigation.navigate("ExploreScreen") }} />

                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="compass"
                                    size={size}
                                    color={color} />
                            )}
                            label="ExpSettinglore"
                            onPress={() => { props.navigation.navigate("SettingScreen") }} /> */}

                    </Drawer.Section>
                </View>

                {/**Change to the dark mode */}
                {/* <Drawer.Section title="Preference">
                    <TouchableRipple onPress={() => { changeTheme() }}>
                        <View style={[styles.preference]}>
                            <Text>Dark Theme</Text>
                            <Switch onValueChange={() => { changeTheme() }} value={isDarkTheme} />
                        </View>
                    </TouchableRipple>

                </Drawer.Section> */}
            </DrawerContentScrollView>

            {/**The underneath section to signout */}
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            size={size}
                            color={color} />
                    )}
                    label='Sign out'
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>


        </View>
    )
}

const styles = StyleSheet.create({
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        lineHeight: 1,
    },

    container: {
        flex: 1
    },
    drawerTopContent: {
        flex: 1
    },

    avatar: {
        flexDirection: 'row',
        paddingHorizontal: 16
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },

    row: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 20,
        paddingBottom: 20,
        marginLeft: 16,
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16
    },

    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },

    caption: {
        fontSize: 14,
        lineHeight: 14,
    }
})