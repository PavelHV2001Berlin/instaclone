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
justify-content: space-between;
gap: 10px;
`


const RoutineView = styled.View`
background: grey;
width: 80%;
height: 50px;
align-items: center;
justify-content: center;
`


//important icon names:
//chevron-down, bars, heart, lock
export default function Home(){
  const [allRoutines, setAllRoutines] = useState([{"routinename": "lol", "CompletedOnDate": ["Heute", "Gestern", "Vorgestern"]}])
  const [routineName, setRoutineName] = useState("")
  const addItem = async()=>{
    try {
      const docRef = await addDoc(collection(db, "routines"), {
        routinename: routineName,
        CompletedOnDate: ["Heute", "Gestern", "Vorgestern"]
      });
      console.log("Document written with ID: ", docRef.id);
      loadRoutines();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  useEffect(()=>{
    loadRoutines();
  },[])
  const loadRoutines = async()=>{
    try{
      const routineSnapshot = await getDocs(collection(db, 'routines'))
      const routinedata = routineSnapshot.docs.map(doc => doc.data());
      setAllRoutines(routinedata)
      console.log(routinedata);
    }catch(error){
      console.error("Error loading routines: ", error);
    }
  }
  return <HomeScreen>
    <LayoutContainer>
       
      {allRoutines.map((routine)=>(
        <RoutineView>
          <Text>{routine["routinename"]}</Text>
        </RoutineView>
      ))}
    </LayoutContainer>
  </HomeScreen>
}


