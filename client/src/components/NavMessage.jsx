import React from 'react';
import profileImg from '../images/avatar/Bust/peep-104.png';

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
      <a href="#" className='nav-link nav-icon' data-bs-toggle="dropdown">
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>3</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
          You have 3 new messages
          <a href="#">
            <span className='badge rounded-pill bg-primary p-2 ms-2'>
              View all
            </span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li className='message-item'>
          <a href="#">
            <img src={profileImg} alt="" className='rounded-circle' />
            <div>
              <h4>Maria Hudson</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, corporis?
              </p>
              <p>4 hr ago</p>
            </div>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
          <a href="#">
            <img src="../images/avatar/Bust/peep-17.png" alt="" className='rounded-circle' />
            <div>
              <h4>Jackson Smith</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, corporis?
              </p>
              <p>1 hr ago</p>
            </div>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li className='message-item'>
          <a href="#">
            <img src="../images/avatar/Bust/peep-1.jpg" alt="" className='rounded-circle' />
            <div>
              <h4>Frank Ocean</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, corporis?
              </p>
              <p>2 hr ago</p>
            </div>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li className='notification-item'>
          <a href="#">Show all notifications</a>
        </li>
      </ul>
    </li>
  )
}

export default NavMessage