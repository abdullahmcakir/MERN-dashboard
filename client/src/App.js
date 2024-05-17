import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Sidebar from './components/Sidebar.jsx';



function App() {
  return (
  <>
  <Header />
  <Sidebar />
  <Main />
  <Footer />
  </>
  );
}

export default App;
