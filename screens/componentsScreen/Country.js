import React from 'react'
import { Text, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'


export default function Country({ item, navigation: { navigate } }) {

    return (
        <TouchableOpacity onPress={() => navigate('DetailScreen', { item })}>
            <Card style={styles.item}>
                <LinearGradient
                    colors={['#e3f2fd', '#f57c00']}
                    style={[StyleSheet.absoluteFill, styles.linearGradient,]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 2, y: 3 }}
                />
                <Card.Title
                    title={item.Country}
                    left={(props) => <Avatar.Icon {...props} icon="file-document-outline" />} />
                <Card.Content>
                    <Paragraph style={styles.paragraphCode}>{"Country Code   :"} {item.CountryCode}</Paragraph>
                    <Paragraph style={styles.paragraphDate}>{"Date Updated            :"} {item.Date}</Paragraph>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        margin: 8,
        borderRadius: 20,
        borderWidth: 0.5,
        overflow: 'hidden',
        
    },

    paragraphCode: {
        fontSize: 20,
        fontWeight: '500'
    },

    paragraphDate: {
        fontSize: 15,
        fontWeight: '200'
    }
})


