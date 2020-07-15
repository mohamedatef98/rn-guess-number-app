import React from 'react'
import { View, Text } from 'react-native'

import { Colors, Fonts } from '../theme'
import { useStyles } from '../hooks'

const Header = ({ title }) => {

    const styles = useStyles(({ isDark }) => ({
        header: {
            width: '100%',
            height: 90,
            paddingTop: 36,
            paddingBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: Colors.greyish,
            borderBottomWidth: 0.5,
            backgroundColor: isDark ? Colors.greyish : Colors.whitish

        },
        text: {
            fontSize: 18,
            fontFamily: Fonts.bold,
            color: isDark ? 'white' : 'black'
        }
    }))

    return <View style={styles.header}>
        <Text style={styles.text} >{title}</Text>
    </View>
}

export default Header
