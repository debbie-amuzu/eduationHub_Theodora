const Navbar = () => {
  return (
    <nav className="navb">
      <div className="pre-nav">
        <p>? Have a question?</p>
        <p>10 20 123 456</p>
        <p>info@mydomain.com</p>
        <p>Login In</p>
        <p>Register</p>
      </div>

      <div className="nav-bar">
        <h1>Nurture.</h1>
        <div className="nav-items">
          <a href="#">Home</a>
          <a href="#">Dropdown</a>
          <a href="#">Our Staff</a>
          <a href="#">News</a>
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">CONTACT</a>
          <div className="enroll"> ENROLL NOW</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
