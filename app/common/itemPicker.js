import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Picker,
} from 'react-native';


const ItemPicker = ({ itemLabel, selectedValue, options, onSelectionChange }) => (
    <View style={styles.base}>
        <Text style={styles.label}>{itemLabel}</Text>
        <Picker style={styles.selection}
            selectedValue={selectedValue}
            onValueChange={onSelectionChange /* call providedMethod(selectedValue, selectedIndex) */}>
            {options.map((o, index) =>
                <Picker.Item key={`_item_key_${index}`} label={o.name} value={o.id} />,
            )}
        </Picker>
    </View>
);

const styles = StyleSheet.create({
    base: {
        // flex: 1, // DO NOT PUT FLEX VALUE HERE (always map to height??) -- all we need is display: flex (also see homeScreen.js)
        flexDirection: 'row', // when direction is row, don't set flex:1 in wrapper; (but for 'column' , must do so)
        alignItems: 'center', // vertical alignment
        justifyContent: 'center', // text-align (horizental alignment)
    },
    label: {
        flex: 1,
    },
    selection: {
        flex: 3,
    },
});

export default ItemPicker;
