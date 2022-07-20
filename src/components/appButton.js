import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
function AppButton({onPress,title,onColor,offColor,textColor,style,fontSize}) {
    return (
        <Pressable
        style={({pressed}) => [
            {
              backgroundColor: pressed ? onColor : offColor,
            },
            styles.buttonContainer,style
          ]}
        onPress={onPress}>
          <Text style={{color:textColor,fontWeight:'bold',fontSize:fontSize,fontFamily:'chewieBold'}}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:'35%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
        alignSelf:'center'
      }
})

export default AppButton;