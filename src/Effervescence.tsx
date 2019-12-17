import React, { Component } from 'react'
import './css/tailwind.css'

import LeftSpace from './side/LeftSpace'
import CenterSpace from './center/CenterSpace'
import RightSpace from './side/RightSpace'

interface Props {
  a?: string;
}
interface State {
  b?: string;
}

/* bundles three panels. */
class Effervescence extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div className='flex w-full'>
        <LeftSpace />
        <CenterSpace />
        <RightSpace />
      </div>
    )
  }
}

export default Effervescence
