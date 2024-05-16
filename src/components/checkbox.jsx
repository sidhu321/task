import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Checkbox = ({ item, handleCheckboxChange }) => {
    return (

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 18, justifyContent:"flex-end" }}>
             <Text style={{color:"#36454F",}}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleCheckboxChange(item.id)}>


                <CheckBox
                    value={item.selected}
                    onValueChange={() => handleCheckboxChange(item.id)}
                    tintColors={{ true: 'blue', false: 'gray' }} 
                />

            </TouchableOpacity>
        </View>
    );
};

export default Checkbox;
