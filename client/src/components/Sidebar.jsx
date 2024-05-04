import React from 'react';
import navList from '../data/navItem';
import NavItem from './NavItem';
import "./sidebar.css";

function Sidebar() {
   
  return (
    <aside id='sidebar' className='sidebar'>
    <ul className="sidebar-nav" id='sidebar-nav'>
        <li className='nav-item'>
            <a href="#" className='nav-link'>
                <i className='bi bi-grid'></i>
                <span>Panel</span>
            </a>
        </li>

        <li className='nav-item'>
            <a href="#" className='nav-link collapsed' data-bs-target="#components-nav" data-bs-toggle="collapse">
                <i className='bi bi-menu-button-wide'></i>
                <span>Dokümanlar</span>
                <i className='bi bi-chevron-down ms-auto'></i>
            </a>
            <ul id='components-nav' className='nav-content collapse' data-bs-parent="#sidebar-nav">
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>Müşteriler</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>Tedarikçiler</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>Lojistik</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className='nav-item'>
            <a href="#" className='nav-link collapsed' data-bs-target="#forms-nav" data-bs-toggle="collapse">
                <i className='bi bi-journal-text'></i>
                <span>Formlar</span>
                <i className='bi bi-chevron-down ms-auto'></i>
            </a>
            <ul id='forms-nav' className='nav-content collapse' data-bs-parent="#sidebar-nav">
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>Başvuru Formu</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>Çıkış Formu</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>İptal Formu</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className='nav-item'>
            <a href="#" className='nav-link collapsed' data-bs-target="#tables-nav" data-bs-toggle="collapse">
                <i className='bi bi-layout-text-window-reverse'></i>
                <span>Tablolar</span>
                <i className='bi bi-chevron-down ms-auto'></i>
            </a>
            <ul id='tables-nav' className='nav-content collapse' data-bs-parent="#sidebar-nav">
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>Genel Tablolar</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>Veri Tabloları</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className='nav-item'>
            <a href="#" className='nav-link collapsed' data-bs-target="#charts-nav" data-bs-toggle="collapse">
                <i className='bi bi-bar-chart'></i>
                <span>Grafikler</span>
                <i className='bi bi-chevron-down ms-auto'></i>
            </a>
            <ul id='charts-nav' className='nav-content collapse' data-bs-parent="#sidebar-nav">
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>Chart.js</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>ApexCharts</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>ECharts</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className='nav-item'>
            <a href="#" className='nav-link collapsed' data-bs-target="#icons-nav" data-bs-toggle="collapse">
                <i className='bi bi-diamond'></i>
                <span>İkonlar</span>
                <i className='bi bi-chevron-down ms-auto'></i>
            </a>
            <ul id='icons-nav' className='nav-content collapse' data-bs-parent="#sidebar-nav">
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>Bootstrap İkonları</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>Remix İkonları</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bi bi-circle'></i>
                        <span>BoxIcons</span>
                    </a>
                </li>
            </ul>
        </li>

        <li className='nav-heading'>Pages</li>
        {navList.map(nav=>(
            <NavItem key={nav._id} nav={nav}/>
        ))}
    </ul>
</aside>
  );
}

export default Sidebar