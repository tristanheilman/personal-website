import React from 'react';
import logo from '../logo.svg';

const phrases = [
  'Javascript',
  'NoSQL',
  'React',
  'Node JS',
  'Firebase',
  'React Native',
  'Python',
  'SQL',
  'Java',
  'Git',
  'Docker',
  'JIRA',
  'Jenkins',
  'CSS/HTML',
  'UI/UX Design'
]
class TextScramble extends React.Component {
    constructor() {
        super();

        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this);

        this.state = {
            innerHTML: ``
        }
    }

    componentDidMount() {

        let counter = 0;

        const next = () => {
            this.scrambleText(phrases[counter]).then(() => {
                this.scramblerID = setTimeout(next, 800)
            })
            counter = (counter + 1) % phrases.length
        }

        next();
    }

    componentWillUnmount() {
        clearTimeout(this.scramblerID);
    }

    scrambleText(newText) {
      const length = Math.max(this.state.innerHTML.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = this.state.innerHTML[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }

    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += char
        } else {
          output += from
        }
      }
      this.setState({innerHTML: output});
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }

    render() {
        return (
            <div class="container">
                <div class="text"><h2>[ {this.state.innerHTML} ]</h2></div>
            </div>
        );
    }
}

export default TextScramble;
