import React, { Component } from 'react'
import '../css/tailwind.css'

import DashboardPanel from './DashboardPanel'

interface Props {
  a?: string;
}
interface State {
  b?: string;
}

class RightSpace extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div className='side-space'>
        <DashboardPanel />
      </div>
    )
  }
}

export default RightSpace
