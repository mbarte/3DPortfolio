import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";   
import { Sky, Environment, Html} from "@react-three/drei";
import Loader from "../components/Loader";
import Town from "../models/Town";
import HomeInfo from "../components/HomeInfo";
import Parrot from "../models/Parrot";
import nightHDR from "../assets/hdr/satara_night_no_lamps_4k.hdr";

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

    const adjustParrotForScreenSize = () => {
        let screenScale, screenPosition;

        // If screen width is less than 768px, adjust the scale and position
        if (window.innerWidth < 768) {
            screenScale = [0, 0, 0];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [0.8, 0.8, 0.8];
            screenPosition = [3, 3, -8];
        }

        return [screenScale, screenPosition];
    };


    const [townScale, townPosition, townRotation] = adjustTownForScreenSize();
    const [parrotScale, parrotPosition] = adjustParrotForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage = {currentStage} setCurrentStage={setCurrentStage}/>}
            </div>

            <Canvas 
               
                className={`w-full h-full bg-transparent ${isRotating? 'cursor-grabbing' : 'cursor-grab'}`}
                camera ={{ near: 0.1, far: 1000 }}
            >
                
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 5, 10]} intensity={2} />
                <spotLight
                    position={[0, 50, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={2}
                />
                <hemisphereLight
                    skyColor='#b1e1ff'
                    groundColor='#000000'
                    intensity={1}
                />

                {/* <Sky
                    distance={450000}
                    sunPosition={[0, 1, 0]}
                    inclination={0.1}
                    azimuth={0.25}
                /> */}

                <Environment files={nightHDR}  
                background 
                environmentIntensity={0}
                backgroundRotation={[30, 0, 0]}
                />

                <Suspense fallback={<Loader/>}>
                    <Parrot
                        isRotating={isRotating}
                        position={parrotPosition}
                        rotation={[0, 0, 0]}
                        scale={parrotScale}
                    />
                    
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

            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <p className="text-amber-400/75 text-sm whitespace-nowrap">Welcome to my portfolio! 👋🏻 Navigate around by dragging or using arrows to explore</p>
            </div>
        </section>
    )
}

export default Home;