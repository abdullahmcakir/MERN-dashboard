import React from 'react';
import profileImg from '../images/avatar/Bust/peep-101.png';

function NavAvatar() {
  return (
    <li className='nav-item dropdown pe-3'>
      <a href="#" className='nav-link nav-profile d-flex align-items-center pe-0' data-bs-toggle="dropdown">
        <img src={profileImg} alt="Profile" className='rounded-circle' />
        <span className='d-none d-md-block dropdown-toggle ps-2'>F.David</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header'>
          <h6>David</h6>
          <span>Web Developer</span>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li>
          <a href="users-profile.html" className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-person'>
              <span>My Profile</span>
            </i>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <a href="users-profile.html" className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-gear'>
              <span>Account Settings</span>
            </i>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li>
          <a href="users-profile.html" className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-question-circle'>
              <span>Need Help?</span>
            </i>c
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li>
          <a href="users-profile.html" className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-box-arrow-right'>
              <span>Sign Out</span>
            </i>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar