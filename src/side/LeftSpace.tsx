import React, { Component } from 'react'
import '../css/tailwind.css'
import TracksetPanel from './TracksetPanel'

interface Props {
  a?: string;
}
interface State {
  b?: string;
}

class LeftSpace extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div className='side-space'>
        <TracksetPanel />
      </div>
    )
  }
}

export default LeftSpace
