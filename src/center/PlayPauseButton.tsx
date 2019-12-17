import React, { Component } from 'react'
import Tone from 'tone'

interface Props {
  toneSource: Tone.Source;
}
interface State {
  toneSource: Tone.Source;
}

class PlayPauseButton extends Component<Props, State> {
  state = {
    toneSource: this.props.toneSource
  }

  handleClick = (): void => {
    if (this.state.toneSource.state === 'stopped') {
      this.state.toneSource.start()
    } else {
      this.state.toneSource.stop()
    }
  }

  render (): React.ReactNode {
    return (
      <button onClick={this.handleClick}>
        start_noise
      </button>
    )
  }
}

export default PlayPauseButton
