import './App.css';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './Home/Home';
import Characters from './Characters/Characters';
import Clans from './Clans/Clans';
import Akatsuki from './Akatsuki/Akatsuki';
import Kara from './Kara/Kara';
import Kekkeigenkai from './Kekkeigenkai/Kekkeigenkai';
import TailedBeasts from './TailedBeasts/TailedBeasts';
import Teams from './Teams/Teams';
import Villages from './Villages/Villages';
        

function App() {

  const navigate = useNavigate();
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => {navigate('/') }
    },
    {
      label: 'Characters',
      command: () => {navigate('/characters') }
    },
    {
      label: 'Clans',
      command: () => {navigate('/clans') }
    },
    {
      label: 'Kara',
      command: () => {navigate('/kara') }
    },
    {
      label: 'Kekkeigenkai',
      command: () => {navigate('/kekkeigenkai') }
    },
    {
      label: 'Tailed Beasts',
      command: () => {navigate('/tailedbeasts') }
    },
    {
      label: 'Teams',
      command: () => {navigate('/teams') }
    },
    {
      label: 'Villages',
      command: () => {navigate('/villages') }
    },
    {
      label: 'Akatsuki',
      command: () => {navigate('/akatsuki') }
    }
  ]

  return (
    <div className="App">
      <Menubar model={items} />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='characters' element={<Characters />} />
          <Route path='clans' element={<Clans />} />
          <Route path='kara' element={<Kara />} />
          <Route path='kekkeigenkai' element={<Kekkeigenkai />} />
          <Route path='tailedbeasts' element={<TailedBeasts />} />
          <Route path='teams' element={<Teams />} />
          <Route path='villages' element={<Villages />} />
          <Route path='akatsuki' element={<Akatsuki />} />
        </Routes>
    </div>
  );
}

export default App;
