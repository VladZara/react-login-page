import {   SelectPara, SelectInput, RealEstate, Select , H3font, Header, SideBarContainer, ContMain, DetailsCont , H3, H5, Para, Detailssecond, Link, Footer, Button, CustomDiv } from "./Preferences.style"
import PreferencesSideBar from "../Preferences/PreferencesSideBar"
import { useState } from "react"
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {doc, setDoc} from "firebase/firestore";

const makeid = (length) => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}



const Preferences = (props) => {
    let navigate = useNavigate();
    const nextPage = () => {
        navigate("/page4")
    }
    const [Min, SetMin] = useState("")
    const [Max, SetMax] = useState("")
    const date = new Date().toString()
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

    const handleSubmit = async (e) => {
        nextPage()
        e.preventDefault();
        await setDoc(doc(db, "preferences", makeid()), {
            preferences: "string"

        });
    }
    // const [checkboxes, setCheckboxes] = useState([{label: 'Single Family', value: true, id: 1}, {label: 'Residential multifamily', value: false, id: 2}])
    const info = []
    const checkboxRef = useRef();
    const save = (event) => {
        const inputValue = event.target.value
        if(checkboxRef.current.checked === true){
            info.push(inputValue)
            console.log(info)
        }else if(checkboxRef.current.checked === false){
            info.shift(inputValue)
            console.log(info)
        }
    }
    const handleClick = (event) => {
        console.log(event.target.innerText);
    }
    // const afterClick = () => {
    //     console.log("yes")
    // }
    //    const onChange = (event, id) => {
    //     checkboxes.findIndex(item => {
    //       })
    //     if(checkboxes.value = true){
    //     }
    //     console.log(id)
    // }
    return (
        <ContMain>
            <SideBarContainer><PreferencesSideBar/></SideBarContainer>
            <DetailsCont>
                <Detailssecond>
                    <Header>
                        <H5>STEP 3 OF 3</H5>
                        <Para>Lost or Have Troubles?<Link> Get Help  → </Link></Para>
                    </Header>
                    <H3>Investment Preferences</H3>
                    <Para>This will help us figure out what your investment options are so that we can show you only possibly intresting for your deals</Para>

                    <H3font>What kind of real estate are u interested in?</H3font>
                    <Select>
                        {/* {
                                ['Single Family', 'Residential multifamily', 'Comercial retail', 'Comercial industrial', 'Comercial hospitality', 'Comercial werehousing', 'Comercial office', 'other'].map((name, idx)=><RealEstate><SelectInput onClick={!idx ? afterClick : ()=>{}} type="checkbox"></SelectInput><SelectPara>{name}</SelectPara></RealEstate>)
                            } */}
                        {/* {
                                checkboxes
                                .map(({label, value}, idx) => <RealEstate><SelectInput key={checkboxes.id} onChange={(item) => onChange(item = value)} onClick={!idx ? afterClick : ()=>{}} type="checkbox" checked={value}></SelectInput><SelectPara>{label}</SelectPara></RealEstate>)
                            } */}
                        <RealEstate><SelectInput onClick={save} value="family" id="1" ref={checkboxRef} autoComplete="on" className="input" type="checkbox"></SelectInput><SelectPara onClick={handleClick}>Family</SelectPara></RealEstate>
                        <RealEstate><SelectInput onClick={save} value="Residential multifamily" ref={checkboxRef} autoComplete="on" className="input" type="checkbox"></SelectInput><SelectPara>Residential multifamily</SelectPara></RealEstate><RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Comercial retail</SelectPara></RealEstate>
                        <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Comercial industrial</SelectPara></RealEstate>
                        <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Comercial hospitality</SelectPara></RealEstate>
                        <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Comercial werehousing</SelectPara></RealEstate>
                        <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Comercial office</SelectPara></RealEstate>
                        <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>other</SelectPara></RealEstate>
                    </Select>
                    <Footer>
                        <Button onClick={() => {navigate("/page2")}}>
                        <Para color="#3988dd">← Back to the previous</Para>
                            </Button>
                        <CustomDiv>
                            <Button onClick={nextPage} color="#3988dd" backgroundColor="#edf7fd">Skip for now</Button>
                            <Button onClick={handleSubmit} type="submit" color="white" backgroundColor="#35a1ee">Next step</Button>
                        </CustomDiv>
                    </Footer>
                </Detailssecond>
            </DetailsCont>
        </ContMain>
    )
}
export default Preferences