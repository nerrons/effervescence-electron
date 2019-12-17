import React, { Component } from 'react'

interface Props {

}
interface State {

}

class RackModule extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div className='p-4'>
        <p>A Rack Module</p>
        {this.props.children}
      </div>
    )
  }
}

export default RackModule
