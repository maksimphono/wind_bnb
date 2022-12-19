import logo from './logo.svg';
import './assets/global.css';
import CardCollection from "./pages/CardsCollection/CardCollection.jsx";
import Header from "./components/ui/Haeder.jsx";
import CardFullView from "./pages/CardFullView/index.jsx";
import DrowDown from './components/ui/DropDown';
import Counter from './components/ui/Counter';
import Layout from "./Layout.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element = {<CardCollection/>} />
          <Route path = "full" element = {<CardFullView/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
<>
    
      <Header />
      <CardCollection />
    </>
*/