import { 
    ContMain,
    Header,
    SideBarContainer,
    Details,
    H4,
    H5,
    Para,
    Detailssecond,
    LocationContainer, 
    LocationImage, 
    LocationInfo, 
    LocationName, 
    LocationText, 
    LocationRegion, 
    MinInvestment, 
    MinInvestmentNum, 
    MinInvestmentText, 
    ProjectedReturn, 
    ProjectedReturnNum, 
    ProjectedReturnText, 
    Last
} from "./ConfirmationStyle"
import ConfirmationSideBar from "./ConfirmationSideBar"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { getDatabase, ref, onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { child, get } from "firebase/database";
import {collection, getDocs,query, where, orderBy, getDoc} from "firebase/firestore";


const ConfirmationContainer = () => {
    const [name, setName] = useState("")
    const firebaseConfig = {
        apiKey: "AIzaSyDFCyVx0svRELkympaEGa0IXW5r0PnCRTE",
        authDomain: "login-ad768.firebaseapp.com",
        projectId: "login-ad768",
        storageBucket: "login-ad768.appspot.com",
        messagingSenderId: "130602005190",
        appId: "1:130602005190:web:e142f77ea3cd7c4bca9dc7",
        measurementId: "G-1365Q36W6L"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)
    const colRef = collection(db, "users")
    const q = query(colRef, orderBy("createdAt", "desc"))
    let myName
    getDocs(q)
        .then((snapshot) => {
            let name = [] 
            snapshot.docs.forEach((doc) => {
                name.push({ ...doc.data(), id: doc.id })
            })
            myName = name[0].name;
            const da = document.querySelector('.p')
            da.textContent = myName
            console.log('myName :>> ', myName);
        })
    console.log('myName :>> ', myName);
    // const Names = name[0]
    // console.log(Names)   
    return (
        <ContMain>
            <SideBarContainer><ConfirmationSideBar/></SideBarContainer>
            <Details>
                <Detailssecond>
                    <Header>
                    <p className="p">{myName}</p>
                        <Para></Para>
                    <H5>STEP 6 OF 6</H5>
                    </Header>
                    <H4>Confirmation</H4>
                    <Para>Every property in this neighborhood has attracted more than $1,000,000. Investors are finally submitting offers like hotcakes!</Para>
                    <LocationContainer>
                    <LocationImage></LocationImage>
                    <LocationInfo>
                        <LocationName>
                        St Regis Aspen Resort
                        </LocationName>
                        <LocationRegion>London • Residential</LocationRegion>
                            <LocationText>London prime residential assets portfolio via London digital bond fund</LocationText>
                            <Last>
                            <MinInvestment>
                            <MinInvestmentNum>$50,000</MinInvestmentNum>
                            <MinInvestmentText>Min. Investment</MinInvestmentText>
                            </MinInvestment>
                            <ProjectedReturn>
                            <ProjectedReturnNum>5,5 - 7,2%</ProjectedReturnNum>
                            <ProjectedReturnText>Projected return</ProjectedReturnText>
                            </ProjectedReturn>
                            </Last>
                    </LocationInfo>
                    </LocationContainer>
                </Detailssecond>
            </Details>
        </ContMain>
    )
}

export default ConfirmationContainer