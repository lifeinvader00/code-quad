import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { start__logOut } from "../actions";
import { Container, Button } from "../ui";

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  flex-basis: 175px;
  h2 {
    word-spacing: 2px;
    font-family: ${props => props.theme.fonts.brand};
    font-size: ${props => props.theme.text.xl};
    line-height: ${props => `calc(1.414 * ${props.theme.text.xl})`};
    font-weight: normal;
    color: ${props => props.theme.colors.textExtraDark};
  }
`;

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Login = styled.div``;

const Profile = styled.div``;

const Dropdown = styled.div``;

const ProfileImage = styled.div``;

const Options = styled.div``;

const Separator = styled.div``;
class Navbar extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Brand>
              <h2>The Quad</h2>
            </Brand>
            <Panel>
              {this.props.isAuthenticated ? (
                <Profile>
                  <Dropdown>
                    <ProfileImage src="" alt="" />
                    <Options>
                      <Link to="/">Profile</Link>
                      <Separator />
                      <Button onClick={this.props.start__logOut}>Logout</Button>
                    </Options>
                  </Dropdown>
                </Profile>
              ) : (
                <Login>
                  <Link to="/login">Login / Create Account</Link>
                </Login>
              )}
            </Panel>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.user.uid
});

const mapDispatchToProps = dispatch => ({
  start__logOut: () => dispatch(start__logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
