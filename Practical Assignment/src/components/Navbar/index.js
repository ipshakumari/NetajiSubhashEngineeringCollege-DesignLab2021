import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/index' activeStyle>
		<img
        src="https://cdn.telanganatoday.com/wp-content/uploads/2020/08/Agnikul-looks-at-foreign-rocket-ports-for-launch.jpg"
        width="200"
        height="200"
        // className="d-inline-block align-middle"
        // alt="React Bootstrap logo"
      />
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
        <NavLink to='/engineering' activeStyle>
			Engineering
		</NavLink>
		<NavLink to='/products' activeStyle>
			Products
		</NavLink>
		<NavLink to='/team' activeStyle>
			Team
		</NavLink>
		<NavLink to='/news' activeStyle>
			News
		</NavLink>
		<NavLink to='/careers' activeStyle>
			Careers
		</NavLink>
		</NavMenu>

		<NavBtn>
		<NavBtnLink to='/book-a-launch'>Book A Launch</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
