const Nav = () => {
  return (
    <StyledNav>
      <Container>
        <div></div>

        <Link to="/" title="Logo">
          <Logo />
        </Link>

        <button type="button" className="menu__toggler">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Container>
    </StyledNav>
  );
};

export default Nav;
