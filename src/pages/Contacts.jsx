import React, { useEffect, useState, useRef, Suspense } from 'react'
import { Canvas, useThree } from "@react-three/fiber";
import emailjs from '@emailjs/browser';
import { socialLinks } from '../constants';

import Loader from "../components/Loader";
import Avatar from '../models/Avatar.jsx'
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const CameraZoom = ({ currentAnimation }) => {
  const { camera } = useThree()
  useEffect(() => {
    camera.position.z = currentAnimation === 'cheering' ? 2.8 : 2
  }, [currentAnimation, camera])
  return null
}

const Contacts = () => {
    const formRef = useRef(null)
    const [form, setForm] = useState({name: '', email: '', message: ''})
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('sitting');

    const {alert, showAlert, hideAlert} = useAlert();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        setCurrentAnimation('writing')
    }
    const handleFocus = () => {setCurrentAnimation('writing')}
    const handleBlur = () => {setCurrentAnimation('sitting')}
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
               name:form.name,
               email:form.email,
               title:'Portfolio Contact - '+ form.name,
               message:form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        ).then(()=> {
            setIsLoading(false)
            showAlert({show:true, 
                text: "Message sent! I promise to get back to you as soon as possible!",
                type: 'success'})
            setCurrentAnimation('cheering')

            setTimeout(()=>{
                setCurrentAnimation('sitting')
                hideAlert()
                setForm({name: '', email:'', message:''})
            }, 3000)
            
        }).catch((error)=> {
            setIsLoading(false)
            showAlert({show:true, 
                text: "I didn't receive the message",
                type: 'danger'})
            console.log(error);
            setCurrentAnimation('disbelief')
        })

    }

    return (
        <section className="relative flex lg:flex-row flex-col max-container !min-h-screen gap-12">
            {alert.show && <Alert {...alert}/>}
          
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Let's get in touch!</h1>
                <div className="flex gap-4 mt-2 mb-4">
                    {socialLinks.map((social) => (
                        <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                            <img src={social.iconUrl} alt={social.name} className="w-8 h-8" />
                        </a>
                    ))}
                </div>
                <p className="text-amber-500 text-md text-center italic">
                    P.S. I haven't gone bald yet because of this job. If the avatar loads without hair, it's a bug — drop me a message if you know how to fix it!
                </p>

                <form className="w-full flex flex-col gap-7"
                    onSubmit={handleSubmit}
                    ref={formRef}
                >
                    <label className="text-black-500 font-semibold">
                        Name
                        <input type="text"
                            name="name"
                            className="input"
                            placeholder="John"
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        ></input>
                    </label>

                    <label className="text-black-500 font-semibold">
                        Email
                        <input type="email"
                            name="email"
                            className="input"
                            placeholder="john@email.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        ></input>
                    </label>

                    <label className="text-black-500 font-semibold">
                        Message
                        <textarea 
                            name="message"
                            rows = {4}
                            className="textarea"
                            placeholder="Let me know how can I help you!"
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        ></textarea>
                    </label>
                    <button type="submit"
                        className="btn"
                        disabled = {isLoading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? 'Sending...' : "Send Message"}
                    </button>
                </form>
            </div>

            <div className="flex flex-col items-center justify-center lg:w-1/2 w-full lg:h-auto md:h-[600px] h-[500px]">
                    
                <Canvas
                    camera ={{position: [0, 0, 2],
                        fov: 75,
                        near:0.1,
                        far:1000
                    }}>
                        <directionalLight intensity={2.5} position={[0, 0, 1]}/>
                        <ambientLight intensity={1}/>
                        <CameraZoom currentAnimation={currentAnimation} />
                    <Suspense fallback={<Loader/>}>
                        <Avatar 
                            currentAnimation={currentAnimation}
                            hairColor="#c47c5d" // #c48c4d, #b99572, #af6a0f
                            position={[0.2, currentAnimation === 'cheering' ? -0.6 : -0.3, 0]}
                            rotation={[0.5,-0.4,0]}
                            scale={[0.8, 0.8, 0.8]}/>
                    </Suspense>
                </Canvas>
            </div>  
            
        </section>
    )
}

export default Contacts;