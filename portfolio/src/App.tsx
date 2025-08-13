import './App.css'
import './components/global.css'
import { InfoCard } from "./components/InfoCard";
import BackgroundScene from "./components/BackgroundScene"
import { useRef, useState } from 'react';
import { TitleCard } from './components/TitleCard';
import { PortfolioCardWrapper } from './components/PortfolioCardWrapper';

const textDummy = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

function App() {

  const cameraPositions: Record<string, [number, number, number]> = {
    "home":[8,19,13],
    "portfolio":[3,1,1],
    "career":[0,0,0]
  }
   const cameraLookAtPositions: Record<string, [number, number, number]> = {
    "home":[1,-31,11],
    "portfolio":[.5,0,2],
    "career":[0,3,0]
  }

  const infoCardDimensions: Record<string,[string,number]> = {
    "home":["right",100],
    "portfolio":["left",50],
    "career":["right",20]
  }
  // we define cameraPos, and set camera pos as the setter function in this. We then call setCameraPos when button is clicked
  const [active, setActive] = useState("home");
  const [cameraPos, setCameraPos] = useState<[number, number, number]>(cameraPositions.home);
  const [count, setCount] = useState(8000);
  const [cameraLookAt, setCameraLookAt] = useState<[number, number, number]>(cameraLookAtPositions.home)
  const [dimensions, setCardDimensions] = useState<[string,number]>(infoCardDimensions.home)
  
  const handleClick = (navElement:string) =>{
    if (active !== navElement){
        setActive(navElement)
        setCameraPos(cameraPositions[navElement])
        setCameraLookAt(cameraLookAtPositions[navElement])
        setCardDimensions(infoCardDimensions[navElement])
    }
  }

  return (
    <>
      <BackgroundScene count={count} cameraPosition={cameraPos} origin={cameraLookAt} />
      <nav className="navbar">
        <button onClick={() => handleClick("home")}>Home</button>
        <button onClick={() => handleClick("portfolio")}>Portfolio</button>
        <button onClick={() => handleClick("career")}>Career/Background</button>
      </nav>

      <main>
        {active === "home" && <TitleCard />}
        {active === "portfolio" && <InfoCard cardTitle="Portfolio" cardText='' infoCardDimensions={dimensions}  children={<PortfolioCardWrapper/>}/>}
        {active === "career" && <InfoCard cardTitle="Career/Background" cardText='lol' infoCardDimensions={dimensions} />}
      </main>
    </>
  );
}

export default App