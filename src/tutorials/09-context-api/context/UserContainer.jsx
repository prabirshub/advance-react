import { useAppContext } from './Navbar'

const UserContainer = () => {
  const { user, logout } = useAppContext()
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
