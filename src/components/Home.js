import React from 'react';
import { Link } from 'react-router-dom';
import truckImg from '../assets/truck.png'

const Home = () => {
    return (
        <div style={{ backgroundColor: '#c3edea' }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6' style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <h1 style={{ fontSize: '60px' }}><b>Transport</b></h1>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                            used to demonstrate the visual form of a document.</p>
                        <div>
                            <Link to="/login"><button type="button" className="btn btn-danger title-button">Book Services</button></Link>
                        </div>
                    </div>
                    <div className='col-6' style={{ paddingLeft: '203px', paddingTop: '50px', paddingBottom: '50px' }}>
                        <img style={{ width: '90%' }} src={truckImg} alt="truck" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home