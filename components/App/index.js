import React, { Component } from 'react';
import styles from './styles.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.profilePicture}>
          <img src={'http://www.fillmurray.com/100/100'} alt=""/>
        </div>
        <div className={styles.feed}>
          <div className={styles.shoutBar}>
            <input
              type="text"
              className={styles.shoutInput}
              placeholder="Shout something..."
            />
            <div
              className={styles.shoutButton}
            >
              SHOUT!
            </div>
          </div>
          <div className={styles.shout}>
            <div className={`${styles.profilePicture} ${styles.profilePictureSmall}`}>
              <img src={'http://www.fillmurray.com/100/100'} alt=""/>
            </div>
            <div className={styles.shoutBody}>
              <div className={styles.username}>Phil</div>
              <div className={styles.shoutText}>TODAY IS TOMORROW. IT HAPPENED!!!</div>
              <div className={styles.shoutActions}>
                <span className={styles.shoutHeart}>♡</span>
                <span className={styles.shoutComment}>comment</span>
              </div>
            </div>
          </div>
          <div className={styles.shout}>
            <div className={`${styles.profilePicture} ${styles.profilePictureSmall}`}>
              <img src={'http://www.fillmurray.com/100/100'} alt=""/>
            </div>
            <div className={styles.shoutBody}>
              <div className={styles.username}>Phil</div>
              <div className={styles.shoutText}>WELL, WHAT IF THERE IS NO TOMORROW?!!!</div>
              <div className={styles.shoutActions}>
                <span className={styles.shoutHeart}>♡</span>
                <span className={styles.shoutComment}>comment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
