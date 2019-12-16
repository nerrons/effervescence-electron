import React, { Component } from 'react'

interface Props {
  a?: string;
}
interface State {
  b?: string;
}

class AboutPage extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div>
        about
      </div>
    )
  }
}

export default AboutPage
