import React from 'react';
import { Header } from "../../components/Header/Header";
import profileImage from '../../assets/profile.png';
import "./profile-style.css";


export const Profile = () => {
    return (
        
        <>
        
        <Header></Header>
            <div className="profile-container">
                <article className="card">
                    <div className='background'>
                        <img src={profileImage} alt="profile" />
                    </div>
                    <div className='content'>
                        <h2>Zack Wilson &#127468;&#127463;</h2>
                        <p>
                            Senior full-stack engineer at
                            <a href="https://google.com" title="Google">Google</a>
                        </p>
                        <p>Helping with:</p>
                        <ul className="chips">
                            <li className="chip">React.js</li>
                            <li className="chip">Node.js</li>
                            <li className="chip">PostgreSQL</li>
                        </ul>
                        <div className="action-buttons">
                            <a href="#book-a-mentor">
                                Book a lector
                            </a>
                            <a href="#learn-more" className="secondary">
                                Learn More
                            </a>
                        </div>
                    </div>
                </article>
            </div>
    </>
            
    );
};