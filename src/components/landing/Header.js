import logo from '../../images/Logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="#logo">
        <img
          src={logo}
          alt="Логотип"
          className="logo button-clickable"
					id='logo'
        />
      </a>
    </header>
  );
}

export default Header;
