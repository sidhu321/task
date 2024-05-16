
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Checkbox from './src/components/checkbox';
import RadioButton from './src/components/Radiobuttons';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: '$ 32', type: 'checkbox', price: 32, selected: false },
    { id: 2, name: '$ 40', type: 'checkbox', price: 40, selected: false },
    { id: 3, name: '$ 80', type: 'checkbox', price: 80, selected: false },
    { id: 4, name: '$ 40', type: 'radio', price: 40, selected: false },

  ]);

  const handleCheckboxChange = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setItems(updatedItems);
  };

  const handleRadioChange = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, selected: true } : { ...item, selected: false }
    );
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      if (item.selected) {
        total += item.price;
      }
    });
    return total;
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 30, backgroundColor: "white" }}>
      <ScrollView>
        <View>

          <View style={{ marginTop: 20 }} >
            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold", }}>Customize "Mens's Haircut"</Text>
            <Text style={{ fontSize: 13, color: "#36454F", marginTop: 20 }}>₹140 - ₹1250</Text>
          </View>

          <View style={{ borderWidth: 0.8, borderColor: "#36454F", marginTop: 30 }}>

          </View>

          <View>
            <Text style={{ marginTop: 20, color: "black", fontSize: 15, fontWeight: "bold" }}> Men's Haircut</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginTop: 20, color: "black", fontSize: 13, flex: 0.80 }}> Men's Haircut</Text>

              {items.map((item) =>
                item.type === 'radio' ? (
                  <RadioButton key={item.id} item={item} handleRadioChange={handleRadioChange} />
                ) : null
              )}
            </View>
          </View>

          <View style={{ borderWidth: 0.5, height: 1, borderColor: "#36454F", marginTop: 20, backgroundColor: "black" }}></View>

          <View>


            <Text style={{ marginTop: 20, color: "black", fontSize: 15, fontWeight: "bold" }}> Select Style</Text>

            <View>
       
         
              
              <View>
                {items.map((item) =>
                  item.type === 'checkbox' ? (
                    <Checkbox key={item.id} item={item} handleCheckboxChange={handleCheckboxChange} />
                  ) : null
                )}
              </View>

            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

            <View style={{ width: 100, height: 30, borderWidth: 1, borderColor: "black", alignItems: "center", justifyContent: "center", marginTop: 50, flexDirection: "row", gap: 20, borderRadius: 7 }}>
              <TouchableOpacity><Text style={{ color: "black" }}>-</Text></TouchableOpacity>
              <Text style={{ color: "black" }}>1</Text>
              <TouchableOpacity><Text style={{ color: "black" }}>+</Text></TouchableOpacity>
            </View>

            <TouchableOpacity>
              <View style={{ width: 100, height: 30, backgroundColor: "black", alignItems: "center", justifyContent: "center", marginTop: 50, borderRadius: 7 }}>
                <Text style={{color:"white"}}>Add ${calculateTotal()}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default App;
