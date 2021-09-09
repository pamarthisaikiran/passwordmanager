import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItems'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Passwords extends Component {
  state = {
    searchInput: '',
    isShow: false,
    website: '',
    username: '',
    password: '',
    profileDetails: [],
  }

  onDeleteId = id => {
    const {profileDetails} = this.state
    this.setState({
      profileDetails: profileDetails.filter(each => each.id !== id),
    })
  }

  renderProfilesList = () => {
    const {profileDetails, searchInput} = this.state
    let list
    const SearchResult = profileDetails.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (SearchResult.length > 0) {
      list = SearchResult.map(eachItem => (
        <PasswordItem
          onDeleteId={this.onDeleteId}
          list={eachItem}
          key={eachItem.id}
        />
      ))
    } else {
      list = (
        <div>
          <img
            className="no-pass"
            alt="no passwords"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          />
          <p className="last">No Passwords</p>
        </div>
      )
    }
    return list
  }

  onCheck = event => {
    const {isShow} = this.state
    this.setState({isShow: event.target.checked})
    console.log(isShow)
  }

  AddProfile = event => {
    event.preventDefault()

    const {website, username, password, isShow} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const NewProfile = {
      id: uuidv4(),
      username,
      website,
      password,
      isShow: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      profileDetails: [...prevState.profileDetails, NewProfile],
      username: '',
      website: '',
      password: '',
    }))
  }

  OnChangewebsite = event => {
    this.setState({website: event.target.value})
  }

  OnchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  OnchangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      searchInput,
      username,
      website,
      password,
      profileDetails,
    } = this.state

    return (
      <div className="bg-container">
        <div>
          <img
            className="logo-img"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          />
        </div>
        <div className="card1">
          <div className="box">
            <form onSubmit={this.AddProfile}>
              <h1 className="box-para">Add New Password</h1>
              <div className="input-img">
                <button type="button" className="btn">
                  {' '}
                  <img
                    className="btn-img"
                    alt="website"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  />
                </button>

                <input
                  value={website}
                  onChange={this.OnChangewebsite}
                  placeholder="Enter Website"
                  type="text"
                  className="input"
                />
              </div>
              <div className="input-img">
                <button type="button" className="btn">
                  {' '}
                  <img
                    className="btn-img"
                    alt="username"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  />
                </button>

                <input
                  value={username}
                  onChange={this.OnchangeUsername}
                  placeholder="Enter Username"
                  type="text"
                  className="input"
                />
              </div>
              <div className="input-img">
                <button type="button" className="btn">
                  {' '}
                  <img
                    className="btn-img"
                    alt="password"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  />
                </button>

                <input
                  value={password}
                  onChange={this.OnchangePassword}
                  placeholder="Enter Password"
                  type="password"
                  className="input"
                />
              </div>
              <div className="btn4">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            className="img-card"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
          />
        </div>

        <div className="bottom">
          <div className="card2">
            <div className="flex">
              <h1 className="bottom-heading">Your Passwords</h1>
              <p className="count">{profileDetails.length}</p>
            </div>
            <div className="input-img">
              <button className="btn">
                {' '}
                <img
                  className="btn-img"
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
              </button>

              <input
                onChange={this.onSearch}
                value={searchInput}
                placeholder="Search"
                type="search"
                className="input"
              />
            </div>
          </div>
          <hr />
          <div className="hr-check">
            <input onChange={this.onCheck} id="pas" type="checkbox" />
            <label className="bottom-heading" htmlFor="pas">
              Show passwords
            </label>
          </div>

          <ul className="ullist">{this.renderProfilesList()}</ul>
        </div>
      </div>
    )
  }
}

export default Passwords
