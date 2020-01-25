import React from 'react'
import { Text } from 'react-native'
import { Colors } from '../store/Colors';

export const LargeHeader = ({text}) => {
    return (
        <Text 
            style={{
                fontSize: 72, 
                fontFamily: 'Bangers-Regular', 
                marginHorizontal: '7.5%',
                textAlign: 'center', 
                color: Colors.TRON_GREEN,
            }}
        >
            {text}
        </Text>
    );
}