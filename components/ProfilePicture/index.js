import React, { Component } from 'react';
import styles from './styles.css';

export default class ProfilePicture extends Component {
  constructor(props) {
    super(props);
  }

  getClassName() {
    if (this.props.isSmall) {
      return `${styles.profilePicture} ${styles.profilePictureSmall}`;
    }

    return styles.profilePicture;
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <img src={this.props.imageUrl} alt=""/>
      </div>
    );
  }
}