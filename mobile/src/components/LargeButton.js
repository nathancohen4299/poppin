import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { Colors } from '../store/Colors';

export const LargeButton = ({text, color, onPress, textColor=Colors.DARK_GRAY}) => {
    return (
        <>
            <View style={[{ width: "70%", marginHorizontal: '15%' }]}>
                <TouchableOpacity 
                    onPress={onPress} 
                    style={{ 
                        height: 64,
                        marginTop: 24, 
                        backgroundColor: color,
                        justifyContent: "center", 
                        borderRadius: 4,
                        shadowRadius: 64,
                        elevation: 12
                    }}
                >
                    <Text style={{color: textColor, textAlign: "center", fontSize: 24, fontFamily: 'Bangers-Regular' }}>{text}</Text>
                </TouchableOpacity>
            </View> 
        </>
    );
}