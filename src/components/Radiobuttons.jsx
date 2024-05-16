import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RadioButton = ({ item, handleRadioChange }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:18,flex:0.20}}>
             <Text style={{color:"#36454F",flex:0.80}}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleRadioChange(item.id)}>
                <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {item.selected && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'blue' }} />}
                </View>
            </TouchableOpacity>
           
        </View>
    );
};

export default RadioButton;
