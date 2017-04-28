import React, { Component, PropTypes } from 'react'
import connect from 'connect-alt'

@connect(({ story: { collection } }) => ({ collection }))
class Guides extends Component {

  static contextTypes = {
    flux: PropTypes.object.isRequired,
    i18n: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { flux, i18n } = this.context

    return flux.getActions('helmet')
      .update({ title: i18n('guides.page-title') })
  }

  render() {
    return (
      <div>
        <h1>Guides</h1>
        <p>Coming soon...</p>
      </div>
    )
  }

}

export default Guides
