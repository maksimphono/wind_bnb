import logo from './logo.svg';
import './assets/global.css';
import CardCollection from "./pages/CardsCollection/CardCollection.jsx";
import CardFullView from "./pages/CardFullView/index.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import DateInput from './components/ui/DateInput';
import ModalComponent from './components/ui/Modal';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element = {<CardCollection/>} />
          <Route path = "full/:id" element = {<CardFullView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;

/*
<DateInput initialValue = {new Date("12.03.22")} label = "Current date" />

*/