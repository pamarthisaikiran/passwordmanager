import './index.css'

const PasswordItem = props => {
  const {list, onDeleteId} = props

  const {id, isShow, website, username, password, initialClassName} = list

  const initial = username ? username[0].toUpperCase() : ''

  const onDeletePassword = () => onDeleteId(id)

  const passwordShow = isShow ? (
    <p className="list-para">{password}</p>
  ) : (
    <img
      className="width"
      alt="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
    />
  )

  return (
    <li className="list-item">
      <div className="list-card">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div className="delete-details">
          <div>
            <p className="list-para">{website}</p>
            <p className="list-para">{username}</p>
            <p className="list-para">{password}</p>
            <img
              className="width"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          </div>
          <button
            testid="delete"
            type="button"
            onClick={onDeletePassword}
            className="delete-button"
          >
            <img
              className="delete-logo"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PasswordItem
