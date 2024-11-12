import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
        <Text>Home</Text>
        
        <Link href={"/(tabs)"} 
        style={{
                backgroundColor: "blue", 
                color:"white", 
                padding:10,
                borderRadius:4, 
                marginTop:10,
                }}>
            <Text style={{fontSize:16}}>Next Stack</Text> 
            <View style={{width:16}}></View>
            <FontAwesome  name='arrow-right' size={16}/>
        </Link>
    </View>
  )
}
