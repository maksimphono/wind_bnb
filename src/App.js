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
      <DrowDown label = "DropD" style = {{"width": "100px", height: 200}}>
        
      <div style = {{display: "block", width: "200px", height: "70px", border: "1px solid red"}}><button>Button</button></div>
        <div style = {{display: "block", width: "200px", height: "70px", border: "1px solid red"}}><button>Button</button></div>
        <div style = {{display: "block", width: "200px", height: "80px"}}>Hello</div>
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