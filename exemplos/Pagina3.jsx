import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default ({navigation}) => {
    return (
       <>
            <View>
                <Text>Página 3</Text>
                <Text>3</Text>

                <Button onPress={()=>navigation.navigate('Home')} >Ir Para a Home</Button>
            </View>
       </> 
    )
}