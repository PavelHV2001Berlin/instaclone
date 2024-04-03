import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {app, db, getFirestore, collection, addDoc} from '../firebase/index';
import { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';

const HomeScreen = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`
const LayoutContainer = styled.View`
width: 90%;
height: auto;
align-items: center;
`
const RoutineInput = styled.TextInput`
border: 1px solid black;
width: 100%;
`
const AddRoutineButton = styled.Button`
width: 100%;
background: green;
`

//important icon names:
//chevron-down, bars, heart, lock
export default function Home(){
  const [users, setUsers] = useState([{"first": "lol"}])
  const [routineName, setRoutineName] = useState("")
  const addItem = async()=>{
    try {
      const docRef = await addDoc(collection(db, "routines"), {
        routinename: routineName
      });
      console.log("Document written with ID: ", docRef.id);
      loadUsers();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  useEffect(()=>{
    loadUsers();
  },[])
  const loadUsers = async()=>{
    try{
      const routineSnapshot = await getDocs(collection(db, 'routines'))
      const routinedata = routineSnapshot.docs.map(doc => doc.data());
      setUsers(routinedata)
      console.log(routinedata);
    }catch(error){
      console.error("Error loading storeis: ", error);
    }
  }
  return <HomeScreen>
    <LayoutContainer>
      <RoutineInput onChangeText={text=> setRoutineName(text)} value={routineName}  />
      <Button color={"green"} onPress={addItem} title='Test'/>
      {users.map((user)=>(
        <Text>{user["first"]}</Text>
      ))}
    </LayoutContainer>
   
  </HomeScreen>
}


