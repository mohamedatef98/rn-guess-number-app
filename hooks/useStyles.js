// import { useColorScheme } from 'react-native-appearance'
import { useWindowDimensions, StyleSheet, useColorScheme } from "react-native"

const useStyles = stylesFn => {
    const isDark = useColorScheme() === 'dark'

    const dimensions = useWindowDimensions()

    const styles = StyleSheet.create(stylesFn({ isDark, dimensions }))

    return styles
}

export default useStyles
