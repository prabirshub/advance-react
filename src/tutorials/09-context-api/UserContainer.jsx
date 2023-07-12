const UserContainer = ({ user, logout }) => {
  return (
    <div>
      {user ? (
        <div className='user-container'>
          <p>Hello there, {user.name}</p>
          <button type='button' className='btn' onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div className='user-container'>
          <p>Please Login</p>
        </div>
      )}
    </div>
  )
}
export default UserContainer
