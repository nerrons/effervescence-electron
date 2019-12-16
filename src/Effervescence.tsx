import React, { Component } from 'react'
import './css/tailwind.css'

import LeftPanel from './left/LeftPanel'
import MainPanel from './main/MainPanel'
import RightPanel from './right/RightPanel'

interface Props {
  a?: string;
}
interface State {
  b?: string;
}

class Effervescence extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div className='flex w-full'>
        <LeftPanel />
        <MainPanel />
        <RightPanel />
      </div>
    )
  }
}

export default Effervescence
