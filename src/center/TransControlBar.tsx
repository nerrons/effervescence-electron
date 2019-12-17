import React, { Component } from 'react'
import Tone from 'tone'
import '../css/tailwind.css'

import PlayPauseButton from './PlayPauseButton'

interface Props {
  toneSource: Tone.Source;
}

class TransControlBar extends Component<Props> {
  render (): React.ReactNode { // change flex
    return (
      <div className='control-bar flex justify-around'>
        <PlayPauseButton toneSource={this.props.toneSource} />
        <span>level</span>
        <span>randomness</span>
      </div>
    )
  }
}

export default TransControlBar
