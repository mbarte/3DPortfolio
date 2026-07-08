import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({text, link, btnText, onClick} ) => {
  return (
    <div className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-black mx-5 rounded-lg bg-amber-100 bg-clip-border">
    <p dangerouslySetInnerHTML={ {__html: text }}></p>
    <br/>
    {btnText && (link ? (
        <Link to={link} className="btn">
          {btnText}
        </Link>
      ) : (
        <button onClick={onClick} className="btn">
          {btnText}
        </button>
      ))}
  </div>)
}

const renderContent = {
  1: (setCurrentStage) => (
    <InfoBox 
      text = "Welcome to my portfolio! 👋🏻"
      btnText="Got it!"
      onClick={() => setCurrentStage(null)}
    />
  ),
  2: () => (
      <InfoBox
        text="Learn more about my story 📖"
        link="/about"
        btnText="Learn More"/> 
  ),
  3: () => (
    <InfoBox
    text="Learn more about my projects 💡"
    link="/projects"
    btnText="Take me to the projects!"/> 
  ),
  4: () => (
    <InfoBox
    text="Let's get in touch! 📬"
    link="/contact"
    btnText="Contacts"/> 
  )
}


const HomeInfo = ({currentStage, setCurrentStage}) => {
  const [visibleStage, setVisibleStage] = useState(currentStage)
  const [fade, setFade] = useState('opacity-100')
  const timer = useRef(null)

  useEffect(() => {
    if (currentStage === visibleStage) return

    if (currentStage !== null) {
      setFade('opacity-0 transition-opacity duration-500')
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        setVisibleStage(currentStage)
        requestAnimationFrame(() => setFade('opacity-100 transition-opacity duration-500'))
      }, 500)
    } else {
      setFade('opacity-0 transition-opacity duration-500')
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setVisibleStage(null), 500)
    }

    return () => clearTimeout(timer.current)
  }, [currentStage])

  if (!visibleStage) return null

  return (
    <div className={fade}>
      {renderContent[visibleStage](setCurrentStage)}
    </div>
  )
}

export default HomeInfo;