import logo from './logo.svg';
import './assets/global.css';
import CardCollection from "./pages/CardsCollection/CardCollection.jsx";
import Header from "./components/ui/Haeder.jsx";
import CardFullView from "./pages/CardFullView/index.jsx";
import DrowDown from './components/ui/DropDown';
import Counter from './components/ui/Counter';

function App() {
  return (
    <>
      <DrowDown toggler = "Drop" isOpen = {false}>
        <Counter title = "Adults" subtitle = "Age 13+" />
        <Counter title = "Children" subtitle = "Age 2- 12" />
      </DrowDown>
    </>
  );
}

export default App;

/*
<>
    <CardFullView />
      <Header />
      <CardCollection />
    </>
*/