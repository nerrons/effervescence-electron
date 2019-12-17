import React, { Component } from 'react'
import DashboardHeader from './DashboardHeader'
import RackModule from './RackModule'
import Knob from './Knob'

interface Props {

}
interface State {

}

class DashboardPanel extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div className='side-panel'>
        <DashboardHeader />
        <RackModule>
          <Knob knobId={1} />
        </RackModule>
      </div>
    )
  }
}

export default DashboardPanel
