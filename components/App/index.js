import React, { Component } from 'react';
import styles from './styles.css';
import ProfilePicture from '../ProfilePicture';
import Shout from '../Shout';
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoutBar: '',
      shouts: [
        {name: 'Phil', text: 'YO!!!', imageUrl: 'http://www.fillmurray.com/100/100'},
        {name: 'Phil', text: 'YO!!!', imageUrl: 'http://www.fillmurray.com/100/100'}
      ]
    }
  }

  updateShoutBar(text) {
    this.setState({
      shoutBar: text
    });
  }

  addShout(e, text) {
    e.preventDefault();
    if (text === '') throw 'No Text Entered';
    const capText = _.upperCase(text);
    this.updateShoutBar('');

    this.setState({
      shouts: [
        ...this.state.shouts,
        {name: 'Phil', text: capText, imageUrl: 'http://www.fillmurray.com/100/100'}
      ]
    })
  }

  render() {
    return (
      <div className={styles.app}>
      <ProfilePicture imageUrl='http://www.fillmurray.com/100/100' />
        <div className={styles.feed}>
          <form
            className={styles.shoutBar}
            onSubmit={ e => this.addShout(e, this.state.shoutBar) }
          >
            <input
              type="text"
              className={styles.shoutInput}
              placeholder="Shout something..."
              onChange={ e => this.updateShoutBar(e.target.value) }
              value={this.state.shoutBar}
            />
            <button
              type="submit"
              className={styles.shoutButton}
            >
              SHOUT!
            </button>
          </form>
          { _.map(this.state.shouts, shout => <Shout {...shout} /> )}
        </div>
      </div>
    )
  }
}
