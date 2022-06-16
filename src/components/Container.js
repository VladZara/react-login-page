import { InputLonger, InputCont, Header, ContMain, SideBar, Details,H4, H3, H5, Para, Detailssecond, Link, Footer, Button, Simplediv, Input } from "./Container.style"

const Container = () => {
    return (
        <ContMain>
            <SideBar></SideBar>
            <Details>
                <Detailssecond>
                    <Header>
                        <H5>STEP 1 OF 3</H5>
                        <Para>Lost or Have Troubles?<Link> Get Help  → </Link></Para>
                    </Header>
                        <H3>Contact Details</H3>
                        <Para>welcome to United Properties, we are glad to see you! Let's get started by  letting us know a little</Para>
                        <InputCont>
                            <Input></Input>
                            <Input></Input>
                            <InputLonger></InputLonger>
                            <InputLonger></InputLonger>
                        </InputCont>
                        <H4>Privacy Policy</H4>
                        <Para>we know you care about how personal information is used and shared, so we take your privacy seriously</Para>
                        <Para color="#35a1ee">Expand privacy policy →</Para>
                    <Footer>
                    <Para color="#3988dd">← Back to the previous</Para> 
                        <Simplediv>
                            <Button color="#3988dd" backgroundColor="#edf7fd">Skip for now</Button> 
                            <Button color="white" backgroundColor="#35a1ee">Next stop→</Button>
                        </Simplediv>
                    </Footer>
                </Detailssecond>
            </Details>
        </ContMain>
    )
}

export default Container