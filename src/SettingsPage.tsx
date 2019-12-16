import React, { Component } from 'react'

interface Props {
  a?: string;
}
interface State {
  b?: string;
}

class SettingsPage extends Component<Props, State> {
  state = {}

  render (): React.ReactNode {
    return (
      <div>
        settings
      </div>
    )
  }
}

export default SettingsPage
