import React, { Component } from 'react'
import './css/tailwind.css'

import LeftPanel from './left/LeftPanel'
import MidPanel from './mid/MidPanel'
import RightPanel from './right/RightPanel'

interface Props {
  a?: string;
}
interface State {
  b?: string;
}

/* bundles three panels. */
class Effervescence extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div className='flex w-full'>
        <LeftPanel />
        <MidPanel />
        <RightPanel />
      </div>
    )
  }
}

export default Effervescence
