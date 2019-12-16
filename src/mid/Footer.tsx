import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

interface Props {
  a?: string;
}
interface State {
  b?: string;
}

class Footer extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div className='flex justify-around text-center'>
        <Link to='/about'>About.</Link>
        <Link to ='/settings'>Settings.</Link>
      </div>
    )
  }
}

export default Footer
