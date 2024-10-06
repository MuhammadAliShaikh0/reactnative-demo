import './gesture-handler';
import { useState } from 'react'
import { View, Text, Image, Button, TouchableOpacity, ScrollView, TextInput, StatusBar } from 'react-native'

const App = () => {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [otp,setOtp] = useState("");


  const handleSubmit = ()=>{
    console.log(name,email,password,otp)

  }
  return (
    <ScrollView>
    <View>
      {/* <Text style={{fontSize:50,color:"red",textAlign:"center"}}> React Native
      
      </Text>
      
      <Image width={200} height={200}  style={{marginHorizontal:"auto"}} 
      source={{ uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" }}  /> 
   <Image style={{height:200,width:200,marginHorizontal:"auto",marginVertical:50}} source={require("./assets/img1.jpg")}/>
<Button title='submit' onPress={handelBtn}/>
<TouchableOpacity>
  <Text onPress={handelBtn} style={{fontSize:40}}>Click me</Text>
</TouchableOpacity> */}

<View style={{alignItems:"center",marginVertical:"auto"}}>
  <StatusBar backgroundColor="green"/>
<TextInput onChangeText={e => setEmail(e)} keyboardType='email-address' placeholder='Enter your email'/>
<TextInput onChangeText={e => setName(e)}  placeholder='Enter your name'/>
<TextInput onChangeText={e => setOtp(e)}  keyboardType='number-pad' placeholder='Otp code'/>
<TextInput onChangeText={e => setPassword(e)}  secureTextEntry={true} placeholder='Enter your password'/>
</View>
<TouchableOpacity>
  <Text onPress={handleSubmit}>
    submit
  </Text>
</TouchableOpacity>
<View>
  <Text style={{padding:20}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
 perferendis maiores repudiandae assumenda hic iste quos! Quas 
 pariatur quod consequuntur non architecto autem, laudantium, similique 
 nesciunt officia ipsa odit nisi dolorem saepe enim reiciendis unde repudiandae 
 culpa voluptatem id ducimus! Facere facilis quo voluptates natus? Quod minima laboriosam id nisi.
  </Text>
</View>
<View>
  <Text style={{padding:20}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
 perferendis maiores repudiandae assumenda hic iste quos! Quas 
 pariatur quod consequuntur non architecto autem, laudantium, similique 
 nesciunt officia ipsa odit nisi dolorem saepe enim reiciendis unde repudiandae 
 culpa voluptatem id ducimus! Facere facilis quo voluptates natus? Quod minima laboriosam id nisi.
  </Text>
</View>
<View>
  <Text style={{padding:20}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
 perferendis maiores repudiandae assumenda hic iste quos! Quas 
 pariatur quod consequuntur non architecto autem, laudantium, similique 
 nesciunt officia ipsa odit nisi dolorem saepe enim reiciendis unde repudiandae 
 culpa voluptatem id ducimus! Facere facilis quo voluptates natus? Quod minima laboriosam id nisi.
  </Text>
</View>
<View>
  <Text style={{padding:20}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
 perferendis maiores repudiandae assumenda hic iste quos! Quas 
 pariatur quod consequuntur non architecto autem, laudantium, similique 
 nesciunt officia ipsa odit nisi dolorem saepe enim reiciendis unde repudiandae 
 culpa voluptatem id ducimus! Facere facilis quo voluptates natus? Quod minima laboriosam id nisi.
  </Text>
</View>
    </View>
    </ScrollView>
  )
}

export default App;
