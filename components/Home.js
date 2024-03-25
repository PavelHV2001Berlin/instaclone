import { StyleSheet, Text, View, Image, Button } from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {app, db, getFirestore, collection, addDoc} from '../firebase/index';
const HomeScreen = styled.View`
flex: 1;
background: #efefef;
padding-top: 50px;
align-items: center;
`
const HeaderNavBar = styled.View`
flex-direction: row;
justify-content: space-between;
width: 90%;
`
const ForYouText = styled.Text`
font-size: 20px;
font-weight: bold;
`

const StoriesSection = styled.View`
flex-direction: row;
width: 100%;
gap: 10px;
margin-top: 10px;
`;
const StoryPics = styled.Image`
width: 80px;
height: 80px;
border-radius: 100px;
`;
const StoryContainerView = styled.View`
justify-content: center;
align-items: center;
margin-left: 10px;
`;
//important icon names:
//chevron-down, bars, heart, lock
export default function Home(){
  const addItem = async()=>{
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return <HomeScreen>
    <Header/>
    <Stories/>
    <Button onPress={addItem} title='Test'/>
  </HomeScreen>
}

function Header(){
  return (
    <HeaderNavBar>
      <View style={{flexDirection: "row", gap: 8, alignItems: "center"}}>
        <ForYouText>Für dich</ForYouText>
        <Icon name='chevron-down' size={15} color="#111"/>
      </View>
      <View style={{flexDirection: "row", gap: 20}}>
        <Icon name='heart' size={25} color="#111"/>
        <Icon name='paper-plane' size={25} color="#111"/>
      </View>
    </HeaderNavBar>
  )
}
function Stories(){
  return <StoriesSection>
    <StoryContainer usernameStory={"Deine Story"}/>
    <StoryContainer usernameStory={"Alice"}/>
    <StoryContainer usernameStory={"Tino"}/>
  </StoriesSection>
}
function StoryContainer({usernameStory}){
  return <StoryContainerView>
    <StoryPics source={require("../assets/img/profilepic.jpg")}/>
    <Text style={{fontSize: 15}}>{usernameStory}</Text>
  </StoryContainerView>
}