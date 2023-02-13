import React from 'react'
import { View, StyleSheet } from 'react-native'

interface IProps {
    color?: string;
    height?: number;
}

const Line: React.FC<IProps> = ({color = 'black', height=1}) => {
  return (
    <View
        style={{
            borderBottomColor: color,
            borderBottomWidth: StyleSheet.hairlineWidth + (height - 1),
            width: '100%',
        }}
    />
  )
}

export default Line