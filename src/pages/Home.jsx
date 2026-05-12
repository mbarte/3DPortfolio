import React, { useState, Suspense, useEffect, useRef, useFrame} from "react";
import { Canvas } from "@react-three/fiber";   
import { Sky, Environment} from "@react-three/drei";
import Loader from "../components/Loader";
import Town from "../models/Town";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);

    const adjustTownForScreenSize = () => {
        let screenScale = null
        let screenPosition = null
        
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768){
            screenScale = [0.75, 0.75, 0.75]
            screenPosition = [-1, -5, -22]
        } else {
            screenScale = [1, 1, 1]
            screenPosition = [-2, -5, -25]
        }

        return [screenScale, screenPosition, rotation]
    }

    const [townScale, townPosition, townRotation] = adjustTownForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage = {currentStage} setCurrentStage={setCurrentStage}/>}
            </div>

            <Canvas 
                className={`w-full h-full bg-transparent ${isRotating? 'cursor-grabbing' : 'cursor-grab'}`}
                camera ={{ near: 0.1, far: 1000 }}
            >
                <ambientLight />

                {/* <Sky
                    distance={450000}
                    sunPosition={[0, 1, 0]}
                    inclination={0.1}
                    azimuth={0.25}
                /> */}

                <Environment preset="night" background/>

                <Suspense fallback={<Loader/>}>
                    <Town 
                        position = {townPosition}
                        scale  = {townScale}
                        rotation = {townRotation}
                        isRotating = {isRotating}
                        setIsRotating = {setIsRotating}
                        setCurrentStage = {setCurrentStage}
                    />
                </Suspense>

            </Canvas>
        </section>
    )
}

export default Home;