import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={{backgroundColor: '#022436'}}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/69820242'}}
          style={{ width: 300, height: 300, marginLeft: 65, marginTop: 80}}
        />
        <Text style={{color: '#FFFFFF', fontSize: 25, marginTop: 15, fontSize: 23, textAlign: 'center'}}>
          Dados Pessoais
        </Text>
        <Text style={{color: '#FFFFFF', fontSize: 25, marginLeft: 15, marginTop: 15, fontSize: 20}}>
          Nome:
        </Text>
         <Text style={{color: '#FFFFFF', fontSize: 25, marginLeft: 15, fontSize: 20, fontStyle: 'italic'}}>
          Igor Batista Priolean
        </Text>

        <Text style={{color: '#FFFFFF', fontSize: 25, marginLeft: 15, marginTop: 15, fontSize: 20}}>
          Data de Nascimento:
        </Text>

         <Text style={{color: '#FFFFFF', fontSize: 25, marginLeft: 15, fontSize: 20, fontStyle: 'italic'}}>
          02/08/1996
        </Text>

        <Text style={{color: '#FFFFFF', fontSize: 25, marginLeft: 15, marginTop: 15, fontSize: 20}}>
          Cel.:
        </Text>
         <Text style={{color: '#FFFFFF', fontSize: 25, marginLeft: 15, fontSize: 20,fontStyle: 'italic'}}>
          (13) 98213-0345
        </Text>

        <Text style={{color: '#FFFFFF', fontSize: 25, marginTop: 15, fontSize: 23, textAlign: 'center'}}>
          Formação
        </Text>
        <Text style={{color: '#FFFFFF', fontSize: 25, marginLeft: 15, marginTop: 15, fontSize: 20}}>
          FATEC PRAIA GRANDE - 
        </Text>
         <Text style={{color: '#FFFFFF', fontSize: 25, marginLeft: 15, fontSize: 20,fontStyle: 'italic'}}>
          Análise e Desenvolvimento de Sistemas - Cursando (12/2023)
        </Text>
        <Text style={{color: '#FFFFFF', fontSize: 25, marginLeft: 15, marginTop: 15, fontSize: 20}}>
          ETEC DRA. RUTH CARDOSO - 
        </Text>
         <Text style={{color: '#FFFFFF', fontSize: 25, marginLeft: 15, fontSize: 20,fontStyle: 'italic'}}>
          Técnico em Informática - Completo (12/2017)
        </Text>
   
      </View>
    )
  }
}


export default App;