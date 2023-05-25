import logo from '../images/Logo.svg';

function Header() {
  return (
    <header class="header">
      <a href="#">
        <img
          src={logo}
          alt="Логотип"
          class="logo button-clickable"
        />
      </a>
    </header>
  );
}

export default Header;