import React, { Component } from 'react'
import '../css/tailwind.css'

interface Props {
  a?: string;
}
interface State {
  b?: string;
}

class AudioControlBar extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div className='control-bar flex justify-around'>
        <span>shuffle</span>
        <span>play</span>
        <span>volume</span>
      </div>
    )
  }
}

export default AudioControlBar
