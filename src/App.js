import logo from './logo.svg';
import './App.css';
import Main from './portfolio files/main';
import SideBar from './sidebar/sidebar';
import Aos from "aos"
import 'aos/dist/aos.css'; 
function App() {
  Aos.init({
    duration:1300,
    offset:500
  });
  return (
    <div className="App">
      <SideBar/>
      <Main/>
    </div>
  );
}

export default App;
