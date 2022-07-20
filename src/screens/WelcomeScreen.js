import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import AppButton from '../components/appButton';
import PageTitleBox from '../components/pageTitleBox';

export default function WelcomeScreen({handleNumber}) {
    const [number, setNumber] = useState('')

    const submit=()=>{
        let targetNumber = parseInt(number)
        if(targetNumber >= 1 && targetNumber <= 99) handleNumber(targetNumber)
        else alert('Recheck')
    }


  return (
    <SafeAreaView style={{flex:1}}>
            <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                <PageTitleBox title={'Guess My Number'}/>
            </View>
    <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
      <View style={{width:'80%',height:'70%',backgroundColor:'#DC2E8A',borderRadius:20,alignItems:'center',opacity:0.7,overflow:'hidden'}}>
        <Text style={{color:'#fff',fontSize:24,height:'30%',top:25,fontFamily:'chewie'}}>Enter a Number</Text>
        <View style={{backgroundColor:'#fff',height:'70%',width:'100%',alignItems:'center',justifyContent:'center'}}>
            <TextInput
            placeholder='99'
            style={{fontSize:40,borderBottomWidth:3,borderBottomColor:'#DC2E8A',textAlign:'center',color:'#DC2E8A'}}
            value={number}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={(val)=>setNumber(val)}
            />
            <View style={{flexDirection:'row',height:'30%',width:'70%',justifyContent:'space-between',top:20}}>
                <AppButton title={'RESET'} onColor='#E0E0E0' offColor={'#DC2E8A'} textColor='#fff' onPress={()=>setNumber('')}/>
                <AppButton title={'CONFIRM'} onColor='#E0E0E0' offColor={'#DC2E8A'} textColor='#fff' onPress={()=>submit()}/>
            </View>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
