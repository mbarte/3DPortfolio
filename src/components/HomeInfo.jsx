import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({text, link, btnText} ) => {
  return (
    <div className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-black mx-5 rounded-lg bg-blue-100 bg-clip-border">
    <p dangerouslySetInnerHTML={ {__html: text }}></p>
    <br/>
    <Link to = {link} className="bg-blue-100 text-green-700 px-25 py-2 font-bold shadow-md hover:border-2 rounded-lg transition">
      {btnText}
    </Link>
  </div>)
}

const renderContent = {
  1: (
    <InfoBox 
      text = "Welcome to my portfolio! 👋🏻 <br/>Navigate around the Town by dragging it or using arrows <br/> and inspect the website sections"
      onClick={() => setCurrentStage(2)}
      btnText="Got it!"
    />
  ),
  2: (
      <InfoBox
        text="Learn more about my story 📖"
        link="/projects"
        btnText="Learn More"/> 
  ),
  3: (
    <InfoBox
    text="Learn more about my projects 💡"
    link="/projects"
    btnText="Take me to the projects!"/> 
  ),
  4: (
    <InfoBox
    text="Let's get in touch! 📬"
    link="/contacts"
    btnText="Contacts"/> 
  )
}


const HomeInfo = ({currentStage, setCurrentStage}) => {

  return  renderContent[currentStage] || null
  
}

export default HomeInfo;