import React, { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";   
import {Environment, useProgress} from "@react-three/drei";
import Town from "../models/Town";
import Parrot from "../models/Parrot";
import HomeInfo from "../components/HomeInfo";
import nightHDR from "../assets/hdr/stars_bg.exr";
import {soundoff, soundon} from "../assets/icons";
import soundtrack from "../assets/audio/soundtrack.mp3"; 


const Home = () => {
    const { progress } = useProgress()
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
    if (progress === 100) {
        const timer = setTimeout(() => setShowSplash(false), 600)
        return () => clearTimeout(timer)
    }
    }, [progress])

    const audioRef = useRef(new Audio(soundtrack))
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);
    const [showCredit, setShowCredit] = useState(false);

    useEffect(()=> {
        if (isPlayingMusic) {
            audioRef.current.play();
        }
        return () => {
            audioRef.current.pause();
        }
    }, [isPlayingMusic])


    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);

    const adjustTownForScreenSize = () => {
        let screenScale = null
        let screenPosition = null
        
        let rotation = [0.1, 6.2, 0]

        if (window.innerWidth < 768){
            screenScale = [0.75, 0.75, 0.75]
            screenPosition = [-1, -5, -22]
        } else {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [1, -7, -30]
        }

        return [screenScale, screenPosition, rotation]
    }

    const adjustParrotForScreenSize = () => {
        let screenScale, screenPosition;

        // If screen width is less than 768px, adjust the scale and position
        if (window.innerWidth < 768) {
            screenScale = [0.3, 0.3, 0.3];
            screenPosition = [1, 2, 0];
        } else {
            screenScale = [0.4, 0.4, 0.4];
            screenPosition = [1, 2, 0];
        }

        return [screenScale, screenPosition];
    };

    const adjustExclamationForScreenSize = () => {
        if (window.innerWidth < 768) {
            return {
                stage1: [6, 7, 12],
                stage2: [17, 6.5, -5],
                stage3: [-5, 6.4, -15],
                stage4: [-18, 6.5, 0],
            }
        } else {
            return {
                stage1: [3, 7.5, 14],
                stage2: [17, 6.5, -3],
                stage3: [0, 7.4, -15],
                stage4: [-15, 6.5, -6],
            }
        }
    }
   

    const [townScale, townPosition, townRotation] = adjustTownForScreenSize();
    const [parrotScale, parrotPosition] = adjustParrotForScreenSize();
    const exclamationPositions = adjustExclamationForScreenSize();

    return (
        <>
        {showSplash &&(
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900">
            
            <p className="text-amber-400/80 text-lg font-medium mb-4">Loading...</p>
            <div className="w-48 h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div
                className="h-full bg-amber-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            />
            </div>
        </div>
        )}
        
        

        <section className="w-full h-dvh relative">
            <div className="absolute bottom-20 md:bottom-32 left-0 right-0 z-10 flex items-center justify-center">
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

                <Environment 
                    files={nightHDR}  
                    background 
                    environmentIntensity={0}
                    backgroundRotation={[30, 0, 0]}
                />

                {/* <Suspense fallback={<Loader/>}> */}
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
                        currentStage = {currentStage}
                        exclamationPositions={exclamationPositions}
                    />

                {/* </Suspense> */}
            </Canvas>


            <div className="absolute  bottom-16 md:bottom-6 left-0 right-0 flex justify-center">
                <p className="text-amber-400/75 text-xs md:text-sm whitespace-nowrap">Navigate around by dragging or using arrows to explore</p>
            </div>
            <div
            className="absolute bottom-2 left-2 flex items-center gap-3"
            onMouseEnter={() => setShowCredit(true)}
            onMouseLeave={() => setShowCredit(false)}
            >
            <img
                src={!isPlayingMusic ? soundoff : soundon}
                alt={isPlayingMusic ? "Mute music" : "Play music"}
                className="md:w-10 md:h-10 h-6 w-6 cursor-pointer object-contain"
                onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                onFocus={() => setShowCredit(true)}
                onBlur={() => setShowCredit(false)}
                tabIndex={0}
            />
            {showCredit && (
                <p className="text-amber-400/75 text-xs whitespace-nowrap">
                Music track: Neo Nebula by Project Ex<br></br>
                Source: https://freetouse.com/music<br></br>
                Free Background Music for Video
                </p>
            )}
            </div>
        </section>
        </>
    )
}

export default Home;