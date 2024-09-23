import userLogo from '../Navbar/user.png';
import '../Navbar/Navbar.css';

function Navbar() {
  return (
    <>
      <nav>
        <ul className="left-menu">
          <li>
            <div className="logo">
              <p className="logo-text">VEDIA</p>
            </div>
          </li>
          <li>
            <input type="search" placeholder="Search..." />
          </li>
        </ul>
        <ul className="right-menu">
          <li>
            <p>Cart</p>
          </li>
          <li>
            <p>Notification</p>
          </li>
          <li>
            <p>Inbox</p>
          </li>
          {/* Profile container to trigger hover on both image and text */}
          <li className="profile-container">
            <img src={userLogo} alt="User Profile" />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
