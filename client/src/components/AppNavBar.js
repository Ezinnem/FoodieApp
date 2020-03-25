import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Container
} from 'reactstrap';

class AppNavBar extends Component {
    state = {
        isOpen : false
    }
toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })
}

render() {
    return (
    <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">Text samples</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
            </Container>
            <Collapse isOpen={this.state.isOpen} navbar >
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/Ezinnem">
                            Github
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    )
}
}

export default AppNavBar
