import React, { Component } from 'react'
import PureKnob, { pureknobInstance } from '../external/pureknob'

type tPureKnob = typeof pureknobInstance
interface Props {
  knobId: number;
}
interface State {
  knobId: number;
  pk: tPureKnob;
}

class Knob extends Component<Props, State> {
  state = {
    pk: PureKnob.createKnob(40, 40),
    knobId: this.props.knobId
  }

  render (): React.ReactNode {
    return (
      <div id={`knob${this.props.knobId}`}></div>
    )
  }
}

export default Knob
