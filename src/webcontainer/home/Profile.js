import React, { Component } from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <a href='#'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hola, yo soy <span className='highlighted-text'>tu vieja</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Surf the Latam Digital Policy Scene",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='prrofile-role-tagline'>
                            kldsfkjsdhfjkdshfjdshfjdshfsdjhfdsjhfdshjfsdjkf
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire me {" "}
                    </button>
                    <a href="#"></a>
                </div>

            </div>
        </div>
    </div>
  )
}
