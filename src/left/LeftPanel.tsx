import React, { Component } from 'react'
import '../css/tailwind.css'

interface Props {
  a?: string;
}
interface State {
  b?: string;
}

class LeftPanel extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div className='w-1/3 bg-gray-400'></div>
    )
  }
}

export default LeftPanel
