import logo from '../../images/Logo.svg';

function Header() {
  return (
    <header class="header">
      <a href="#logo">
        <img
          src={logo}
          alt="Логотип"
          class="logo button-clickable"
					id='logo'
        />
      </a>
    </header>
  );
}

export default Header;