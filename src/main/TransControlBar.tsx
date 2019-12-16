import React, { Component } from 'react'
import '../css/tailwind.css'

interface Props {
  a?: string;
}
interface State {
  b?: string;
}

class TransControlBar extends Component<Props, State> {
  state = {}

  render (): React.ReactNode { // change flex
    return (
      <div className='control-bar flex justify-around'>
        <span>level</span>
        <span>randomness</span>
      </div>
    )
  }
}

export default TransControlBar
