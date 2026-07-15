import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import infoIcon from '../assets/icons/info.png'


const TypingInfoBox = ({text, link, btnText, onClick}) => {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  const graphemes = useMemo(
    () => [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text)]
      .map(s => s.segment),
    [text]
  )

  const displayed = graphemes.slice(0, count).join('')

  useEffect(() => {
    if (count >= graphemes.length) {
      setDone(true)
      return
    }
    const timer = setTimeout(() => setCount(c => c + 1), 50)
    return () => clearTimeout(timer)
  }, [count, graphemes.length])

  return (
    <div className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5">
      <p className='bg-gradient-to-r from-[#f7d433] to-[#fe9a00] px-4 rounded-lg'>{displayed}{!done && <span className="animate-cursor">▌</span>}</p>
      <br/>
      {btnText && (link ? (
        <Link to={link} className="btn">
          {btnText}
          <img src={infoIcon} className="text-white w-6 h-6 inline-block ml-1" alt="info icon"></img>
        </Link>
      ) : (
        <button onClick={onClick} className="btn">
          <img src={infoIcon}></img>
          {btnText}
        </button>
      ))}
    </div>
  )
}


const renderContent = {
  1: () => (
      <TypingInfoBox
        text="Welcome to my portfolio! 👋🏻 I'm Michele! Please, take a look around"/> 
  ),
  2: () => (
      <TypingInfoBox
        text="Learn more about my story 📖"
        link="/about"
        btnText="More"/> 
  ),
  3: () => (
    <TypingInfoBox
    text="Learn more about my projects 💡"
    link="/projects"
    btnText="More"/> 
  ),
  4: () => (
    <TypingInfoBox
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