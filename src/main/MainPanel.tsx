import React from 'react'
import '../css/tailwind.css'
import AudioControlBar from './AudioControlBar'
import Footer from './Footer'
import Logo from './Logo'
import TransControlBar from './TransControlBar'

const MainPanel: React.FC = () => (
  <div className='flex-grow w-1/3'>
    <Logo />
    <AudioControlBar />
    <TransControlBar />
    <Footer />
  </div>
)

export default MainPanel
