import React, { Component } from 'react'

import FontAwesome from 'react-fontawesome'

import './PageFooter.css';

const fb_icon = require('../../img/facebook_icon.png')
const yt_icon = require('../../img/youtube_icon.png')
const ig_icon = require('../../img/instagram_icon.png')

const Icon = (props) => (
  <li>
    <a className="navbar-brand vcenter changeFont" href="#">
      <span><img className="img-responsive2 vcenter" src={props.src}/></span>
    </a>
  </li>
)

export class PageFooter extends Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-bottom footer">
        <div className="container-fluid cut-width">

          <ul className="nav navbar-nav navbar-left">
            <li>
              <p> © HobbyHub {new Date().getFullYear()}, made with love by Team 2</p>
            </li>
          </ul>

          <ul className="social-icon animate pull-right">
            <Icon src={fb_icon} />
            <Icon src={yt_icon} />
            <Icon src={ig_icon} />
          </ul>
        </div>
      </div>
    );
  }
}
