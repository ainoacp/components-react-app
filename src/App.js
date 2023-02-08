import logo from './logo.svg';
import './App.css';
import './components/Header/Header'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Btn from './components/Btn/Btn';
import ClickBtn from './components/ClickBtn/ClickBtn';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import List from './components/List/List';
import Gallery from './components/Gallery/Gallery'
import { useState } from 'react';
import CounterEffect from './components/CounterEffect/CounterEffect';

const lista = ["Mejorar react", "Saber react", "Trabajar react"]


function App() {

  const [cardList, setCardList] = useState([{
    title: "Paisaje 1",
    description: "Es un bosque",
    img: "https://img.freepik.com/foto-gratis/disparo-vertical-bosque-otono-su-reflejo-lago_181624-53453.jpg?w=2000"
  },{
    title: "Paisaje 2",
    description: "Es una playa",
    img: "https://previews.123rf.com/images/farang/farang1401/farang140100026/25018236-playa-tropical-composici%C3%B3n-vertical-.jpg"
  },{
    title: "Paisaje 3",
    description: "Es un desierto",
    img: "https://www.xtrafondos.com/descargar.php?id=419&vertical=1"
  },{
    title: "Paisaje 4", 
    description: "Es una ciudad",
    img: "https://img2.viajar.elperiodico.com/82/47/3e/05_zha_-shenzhen-tower-c_render-by-brick-visual-650x853.jpg"
  }]); 
  
  const addNewItem = (card) => {
    setCardList([...cardList, card])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <main className='App-main'>
        <img src={logo} className="App-logo" alt="logo" />
        <Btn text='Guardar'></Btn>
        <Btn text={true}></Btn>
        <ClickBtn></ClickBtn>
        <br></br>
        <br></br>
        <p>-------------------------------------------------------------------------</p>
        <br></br>
        <br></br>
        <Counter></Counter>
        <br></br>
        <br></br>
        <p>-------------------------------------------------------------------------</p>
        <br></br>
        <br></br>
        <Form onSubmit={addNewItem}></Form>
        <br></br>
        <br></br>
        <p>-------------------------------------------------------------------------</p>
        <br></br>
        <br></br>
        <Gallery list={cardList}></Gallery>
        <br></br>
        <br></br>
        <p>-------------------------------------------------------------------------</p>
        <br></br>
        <br></br>
        <List list={lista}></List>
        <br></br>
        <br></br>
        <p>-------------------------------------------------------------------------</p>
        <br></br>
        <br></br>
        <CounterEffect></CounterEffect>
      </main>
      <footer className='App-footer'>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
