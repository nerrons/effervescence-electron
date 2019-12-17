import React, { Component } from 'react'
import TracksetHeader from './TracksetHeader'

interface Props {

}
interface State {

}

class TracksetPanel extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div className='side-panel'>
        <TracksetHeader />
      </div>
    )
  }
}

export default TracksetPanel
