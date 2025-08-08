import './App.css'
import { Canvas } from '@react-three/fiber'
import { InfoCard } from "./components/InfoCard";
import { NavigationBar } from "./components/NavigationBar";
import BackgroundScene from "./components/BackgroundScene"
import { useRef, useState } from 'react';
import { TitleCard } from './components/TitleCard';

const textDummy = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

function App() {

  const [active, setActive] = useState("home");
  const cameraPositions: Record<string, [number, number, number]> = {
    "home":[10,20,10],
    "portfolio":[0,0,0],
    "career":[4,3,2]
  }
  // we define cameraPos, and set camera pos as the setter function in this. We then call setCameraPos when button is clicked
  const [cameraPos, setCameraPos] = useState<[number, number, number]>(cameraPositions.home);
  const [count, setCount] = useState(6000);

  return (
    <>
            
      <BackgroundScene count={count} cameraPosition={cameraPos} />
      <nav className="navbar">
        <button onClick={() => {setActive("home"); setCameraPos(cameraPositions.home)}}>Home</button>
        <button onClick={() => {setActive("portfolio"),  setCameraPos(cameraPositions.portfolio)}}>Portfolio</button>
        <button onClick={() => {setActive("career"),  setCameraPos(cameraPositions.career)}}>Career/Background</button>
      </nav>
      <main>
        {active === "home" && <TitleCard />}
        {active === "portfolio" && <InfoCard cardTitle="Portfolio" cardText='lol' />}
        {active === "contact" && <InfoCard cardTitle="Career/Background" cardText='lol' />}
      </main>
    </>
  );
}

export default App