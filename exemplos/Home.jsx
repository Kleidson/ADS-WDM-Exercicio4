import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default ({navigation}) => {
    return (
       <>
            <View>
                <Text>Página Inicial</Text>
                <Text>Bem vindo a Home</Text>

                <Button onPress={()=>navigation.navigate('p1')} >Ir Para a Página 1</Button>
                <Button onPress={()=>navigation.navigate('filmes/populares')} >Ir Para filmes populares</Button>
            </View>
       </> 
    )
}
