import React, { Component } from 'react'
import { connect } from 'react-redux';

import { isUserLogged, userLogged } from '../../actions'
import { LoggedUserNavigation } from './LoggedUserNavigation'
import { DefaultNavigation } from './DefaultNavigation'

import './TopNavigation.css';

export class TopNavigationRaw extends Component {
  render() {
    const isUserLogged = this.props.user.isUserLogged
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        {
          (isUserLogged ? <LoggedUserNavigation/> : <DefaultNavigation/>)
        }
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}

export default connect(mapStateToProps, { isUserLogged, userLogged })(TopNavigationRaw)
