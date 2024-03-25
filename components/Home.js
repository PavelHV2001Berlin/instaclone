import { StyleSheet, Text, View, Image } from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
  return <HomeScreen>
    <Header/>
    <Stories/>
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