import React from 'react';
import SwapImage from '../../Assets/Links/Crypt3d Punks Unreveal Wrapper.gif'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '.././PersonalNftInfo/PersonalNftInfo.css'
import { Container } from 'react-bootstrap';
const PersonalNftInfo = () => {
    return (
        <div  className="PersonalNftInfoTable">
            <Container  >
                <Row xs={1} sm={1} lg={2} className="">
                    <Col style={{backgroundColor: "#6CB8D9"}}className="pt-5 pb-5">
                        <div >
                            <div>
                                <h1>Swap Portal</h1>
                                <p>Swap your old ERC-1155 Crypt3d Punk NFT for
                                    your new, shiny, ERC-721 Crtyp3d Punk NFT here.</p>
                            </div>
                            <img width="70%" src={SwapImage} alt="" />
                            <h3>ERC-1155 Punks in Wallet: 3</h3>
                            <div className='mt-3'>
                                <a href="#" className='Connect_wallet'>CONNECT WALLET</a>
                                <p className='CompletePrice'>Complete Pricing Guide</p>
                            </div>
                        </div>
                    </Col>
                    <Col style={{backgroundColor:"#E5F9FD"}}>


                    </Col>
                </Row>   </Container>

        </div>
    );
}
export default PersonalNftInfo;
