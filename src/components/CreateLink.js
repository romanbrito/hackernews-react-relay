import React, {Component} from 'react'

class CreateLink extends Component {
  state = {
    description: '',
    url: ''
  }

  render() {

    return (
      <div>
        <div>
          <input
            className='mb2'
            value={this.state.description}
            onChange={(e) => this.setState({description: e.target.value})}
            type='text'
            placeholder='A description for the link'
          />
          <input
            className='mb2'
            value={this.state.url}
            onChange={(e) => this.setState({url: e.target.value})}
            type='text'
            placeholder='The URL for the link'
          />
        </div>
        <div
          className='button'
          onClick={() => this._createLink()}
        >
          submit
        </div>
      </div>
    )

  }

  _createLink = () => {
    // .. you'll implement this in a bit
  }

}

export default CreateLink