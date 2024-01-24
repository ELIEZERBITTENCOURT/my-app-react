import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./header-style.css";
import logo from '../../assets/logo.svg'
import messageIcon from '../../assets/message.svg';
import notificationIcon from '../../assets/notification.svg';
import profileImage from '../../assets/profile.png';
import avatar1 from '../../assets/jason.jpg';
import avatar2 from '../../assets/michelle.jpg';
import avatar3 from '../../assets/ricahrd_taylor.jpg';
import avatar4 from '../../assets/jennifer.jpg';


export const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const notificationsRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !notificationsRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  return (
    <header>
      <div className="navigation__group">
      <Link to="/" className='home'>
        <button className="icon-wrapper">
          <img className="icon" src={ logo } alt="Home" />
        </button>
        </Link>
        <Link to="/message" className='message'>
        <button className="icon-wrapper">
          <img className="icon" src={ messageIcon } alt="Message" />
        </button>
        </Link>
        <div className="icon-wrapper notifications" ref={notificationsRef}>
          <button type="button" onClick={toggleDropdown}>
            <img className="icon" src={ notificationIcon } alt="Notification" />
          </button>
          <div className={`notification-mark ${isDropdownVisible ? 'notification-mark--pulsing' : ''}`}></div>
        </div>
        <Link to="/profile" className="profile">
        <button type="button" className="profile">
          <img src={ profileImage } alt="Profile" />
        </button>
        </Link>
      </div>
      <div className={`dropdown__wrapper ${isDropdownVisible ? 'dropdown__wrapper--fade-in' : 'none'}`} ref={dropdownRef}>
        <div className="notifications-top">
          <h2>Notifications</h2>
        </div>
        <div className="notification-items">
          <div className="notification-item notification-item--recent">
            <div className="avatar-wrapper">
              <img className="avatar" src={ avatar1 } alt="Jason Alexander"/>
            </div>
            <div className="notification-item__body">
              <div>
                <strong>Jason Alexander</strong> completed <strong>Issue 131</strong>
              </div>
              <span className="time">
                6 min ago
              </span>
            </div>
            <div className="border"></div>
          </div>
          <div className="notification-item notification-item--recent">
            <div className="avatar-wrapper">
              <img className="avatar" src={ avatar2 } alt="Michelle Claude"/>
            </div>
            <div className="notification-item__body">
              <div>
                <strong>Michelle Claude</strong> opened a new <strong>Issue 152</strong>
              </div>
              <span className="time">
                8 min ago
              </span>
            </div>
          </div>

          <div className="notification-item">
            <div className="avatar-wrapper">
              <img className="avatar" src={ avatar3 } alt="Richard Taylor"/>
            </div>
            <div className="notification-item__body">
              <div>
                <strong>Richard Taylor</strong> edited <strong>Road Map 2023</strong>
              </div>
              <span className="time">
                1 week ago
              </span>
            </div>
          </div>
          <div className="notification-item">
            <div className="avatar-wrapper">
              <img className="avatar" src={avatar4} alt="Jennifer Floyd"/>
            </div>
            <div className="notification-item__body">
              <div>
                <strong>Jennifer Floyd</strong> created <strong>Road Map 2023</strong>
              </div>
              <span className="time">
                1 week
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

