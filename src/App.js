import './App.css'
import {Component} from 'react'
import SearchItem from './SearchItem/index'

// Replace your code here
class Homepage extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="bg-container">
            <div>
              <h1>Ed Sheeran</h1>
              <p>Singer</p>
            </div>
          </div>
          <div>
            <SearchItem />
          </div>
        </div>
      </div>
    )
  }
}

const App = () => <Homepage />

export default App
