import React from 'react'
import '../css/tailwind.css'

import { whiteNoiseCore } from '../audiocore/AudioCore'
import AudioControlBar from './AudioControlBar'
import Footer from './Footer'
import Logo from './Logo'
import TransControlBar from './TransControlBar'

const CenterSpace: React.FC = () => (
  <div className='flex-grow w-1/3'>
    <Logo />
    <AudioControlBar />
    <TransControlBar toneSource={whiteNoiseCore}/>
    <Footer />
  </div>
)

export default CenterSpace
