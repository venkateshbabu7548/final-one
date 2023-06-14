import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isSaved: false, inputText: ''}

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  saveInput = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  render() {
    const {inputText, isSaved} = this.state
    return (
      <div className="con">
        <div className="responsive">
          <h1>Editable Text Input</h1>
          <div className="input-con">
            {!isSaved && (
              <>
                <input
                  type="text"
                  value={inputText}
                  onChange={this.onChangeInput}
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.saveInput}
                >
                  Save
                </button>
              </>
            )}
            {isSaved && (
              <>
                <p className="text">{inputText}</p>
                <button
                  type="button"
                  className="button"
                  onClick={this.saveInput}
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
