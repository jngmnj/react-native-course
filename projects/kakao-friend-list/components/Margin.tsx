import React from 'react';
import { View } from 'react-native';

interface MarginProps {
    height: number
}
const Margin = (props: MarginProps) => {
  return <View style={{ height: props.height }} />;
};

export default Margin