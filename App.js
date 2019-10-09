import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';


export default class Index extends Component {
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:1, justifyContent: 'center', marginTop: '-5%'}}>
          <Image 
          source={require('./src/img/150px.png')}
          style={{justifyContent: 'center', marginStart:'38%'}}/>
          <Text style={{marginStart: '46%', justifyContent: 'center', paddingTop: '5%'}}>
            SITU FT
          </Text>
        </View>

        <View style={{flex:1}}>
          <TextInput keyboardType='numeric'
          maxLength={9}
          placeholder="NRP"
          style={{borderBottomWidth: 1, marginEnd: '10%', marginStart: '10%', marginBottom: '5%'}}/>
          <TextInput maxLength={12}
          placeholder="Password"
          secureTextEntry={true}
          style={{borderBottomWidth: 1, marginEnd: '10%', marginStart: '10%', marginBottom: '5%'}}/>

          <TouchableOpacity>
            <View
              style = {{backgroundColor: '#FFE043', alignItems: 'center', 
                justifyContent: 'center', borderRadius: 10, padding: 20, 
                marginStart:'70%', marginEnd:'10%', flex:1}}>
              <Text style = {{color: '#000'}}>Login</Text>
            </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}