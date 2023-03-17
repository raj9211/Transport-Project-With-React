import React from 'react'
import groupImg from '../assets/office-people.png'

const About = () => {
    return (
        <div className='row' style={{ backgroundColor: 'white', width: '100%' }}>
            <h1 style={{ textAlign: 'center', padding: '0px', margin: '62px 0' }}><b>About Us</b></h1>
            <div className='col-6' style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', textAlign: 'center', padding: '0px 200px' }}>
                <p>Welcome to EasyVahan, your number one source for all things [product]. We're dedicated to providing you the very best of Transport services.
                    Founded in 2020 by Bytecoder , EasyVahan has come a long way from its beginnings in West Bengal.</p>

                <p>&nbsp;&nbsp; When Bytecoder first started out, their passion for Reduce cost of Tranport drove them to start their own business.
                    We hope you enjoy our Services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
            </div>
            <div className='col-6' style={{ padding: '0px' }} >
                <img src={groupImg} alt="people" width={'70%'} />
            </div>
        </div>
    )
}

export default About