import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';

    export default class Navi extends React.Component{
        constructor(props){
            super(props);
            this.toggleNavbar = this.toggleNavbar.bind(this);
            this.state = {
                collapsed: true
            };
        }

        toggleNavbar() {
            this.setState({
              collapsed: !this.state.collapsed
            });
          }

        render(){
            return (
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Color Game</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar}/>
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Source Code On GitHub</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            );
        }

    }
  