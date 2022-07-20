import React,{useState} from 'react';
import { Text, View, TextInput, SafeAreaView } from 'react-native';

import PageTitleBox from '../components/pageTitleBox';
import AppButton from '../components/appButton';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

function GameScreen({userNumber}) {  
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                <PageTitleBox title={`Opponent's Guess`}/>
            </View>
            <View style={{flex:0.15,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:'60%',backgroundColor:'#DC2E8A',borderRadius:20,alignItems:'center',opacity:0.7,overflow:'hidden'}}>                
                    <View style={{backgroundColor:'#fff',height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
                        <TextInput
                        placeholder='99'
                        style={{fontSize:40,textAlign:'center',color:'#DC2E8A'}}
                        value={initialGuess.toString()}
                        keyboardType='number-pad'
                        maxLength={2}
                        />
                    </View>
                </View>
            </View>
            <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>           
                    <Text style={{color:'#fff',fontSize:24,height:'30%',padding:10,fontFamily:'chewie'}}>Higher or Lower ?</Text>               
                         <View style={{flexDirection:'row',height:'30%',width:'70%',justifyContent:'space-between',top:20}}>
                            <AppButton title={'+'} onColor='#E0E0E0' offColor={'#DC2E8A'} textColor='#fff' fontSize={24} onPress={()=>setNumber('')}/>
                            <AppButton title={'-'} onColor='#E0E0E0' offColor={'#DC2E8A'} textColor='#fff' fontSize={24} onPress={()=>submit()}/>
                        </View>         
            </View>
        </SafeAreaView>
    );
}

export default GameScreen;