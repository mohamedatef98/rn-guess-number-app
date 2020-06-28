import React, { useState } from 'react'
import { View } from 'react-native'

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const rnd = Math.floor((Math.random() * (max - min)) + min)

    if (rnd === exclude) return generateRandomNumber(min, max, exclude)
    return rnd
}

const Game = ({ userChoice }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userChoice))
    return (
        <View>
        </View>
    )
}

export default Game
