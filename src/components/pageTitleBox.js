import React from 'react';
import { View, Text } from 'react-native';

function PageTitleBox({title}) {
    return (
        <View style={{width:'70%',borderWidth:2,borderColor:'#fff',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#fff',fontSize:20,padding:10,fontFamily:'chewieBold'}}>{title}</Text>
        </View>
    );
}

export default PageTitleBox;