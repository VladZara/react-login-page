import {   SelectPara, SelectInput, RealEstate, Select , H3font, Header, SideBarContainer, ContMain, DetailsCont , H3, H5, Para, Detailssecond, Link, Footer, Button, Simplediv } from "./Preferences.style"
import PreferencesSideBar from "../Preferences/PreferencesSideBar"

// const checkbox = () => {
//     const realEstate = document.querySelector(".sc-fmRtwQ cAcbnZ")
//     const changeColor = document.querySelector("input")
//     if (changeColor.checked === true) {
//         realEstate.classList.toggle("checked")
        
//     }
//     }

const Preferences = () => {
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
                            <RealEstate><SelectInput type="checkbox"/><SelectPara>Single Family</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"/><SelectPara>Residential multifamily</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"/><SelectPara>Comercial retail</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"/><SelectPara>Comercial industrial</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"/><SelectPara>Comercial hospitality</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"/><SelectPara>Comercial werehousing</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"/><SelectPara>Comercial office</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"/><SelectPara>other</SelectPara></RealEstate>
                        </Select>
                    <Footer>
                    <Para color="#3988dd">← Back to the previous</Para> 
                        <Simplediv>
                            <Button color="#3988dd" backgroundColor="#edf7fd">Skip for now</Button> 
                            <Button color="white" backgroundColor="#35a1ee">Next stop→</Button>
                        </Simplediv>
                    </Footer>
                </Detailssecond>
            </DetailsCont>
        </ContMain>
    )
}
export default Preferences
