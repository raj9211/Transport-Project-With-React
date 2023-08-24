import React from 'react'
import groupImg from '../assets/office-people.png'

const About = () => {
    return (
        <div className='row' style={{ backgroundColor: 'white', width: '100%' }}>
            <h1 style={{ textAlign: 'center', padding: '0px', margin: '62px 0' }}><b>About Us</b></h1>
            <div className='col-6' style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', textAlign: 'center', padding: '0px 200px' }}>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
            </div>
            <div className='col-6' style={{ padding: '0px' }} >
                <img src={groupImg} alt="people" width={'70%'} />
            </div>
        </div>
    )
}

export default About