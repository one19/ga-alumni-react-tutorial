import React, { Component } from 'react';
import styles from './styles.css';
import ProfilePicture from '../ProfilePicture';

export default class Shout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imageUrl, userName, text } = this.props;
    return(
      <div className={styles.shout}>
        <ProfilePicture imageUrl={imageUrl} isSmall />
        <div className={styles.shoutBody}>
          <div className={styles.username}>{name}</div>
          <div className={styles.shoutText}>{text}</div>
          <div className={styles.shoutActions}>
            <span className={styles.shoutHeart}>♡</span>
            <span className={styles.shoutComment}>comment</span>
          </div>
        </div>
      </div>
    );
  }
}