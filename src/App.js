import React from 'react';
import ReactCardFlip from 'react-card-flip';
import coverDark from './images/cover-dark.svg';
import coverLight from './images/cover-light.svg';
import './App.scss';
import events from './events';
import faq from './faq';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="cover" alt="cover" /> {/* SPECIFIED IN CSS */}
        <div className="content">
          <h3>ICS Student Council invites you to WebJam, a week-long competition where teams of students will create fully functional web applications! We'll be providing workshops throughout the week to help you get started, and awarding amazing prizes for the best projects out there!</h3>
          <h4 className="accent"><a href="https://forms.gle/2E5okwV7KS9btNQx6">Register</a></h4>
          <h4><a href="https://forms.gle/Le9KEoNFqpnYpoKVA">Become a Mentor</a></h4>
        </div>
      </header>

      <div className="section schedule">
        <h2>Event Schedule</h2>
        <div className="events">
          { events.map(event => <Event name={event.name} shortDate={event.shortDate} info={event.info} description={event.description} />) }
        </div>
      </div>

      <div className="section faq">
        <h2>FAQs and Rules</h2>
        <div className="questions">
          { faq.map(question => <Question question={question.question} answer={question.answer} />) }
        </div>
      </div>

      <div className="section copyright">
        <p>© 2021 ICSSC Projects Committee</p>
      </div>

    </div>

  );
}

function Event(props) {
  return (
    <div className="Event">
      <div className="header">
        <div className="date">
          <h4>{ props.shortDate }</h4>
        </div>
        <div className="text">
          <h3>{ props.name }</h3>
          <h5>{ props.info }</h5>
        </div>
      </div>
      <p>{ props.description }</p>
    </div>
  )
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }

  handleClick = () => {
    this.setState({ isFlipped: !this.state.isFlipped });

  };

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div className="Question" onClick={this.handleClick}>
          <h3>{ this.props.question }</h3>
        </div>

        <div className="Question answered" onClick={this.handleClick}>
          <p dangerouslySetInnerHTML={{ __html: this.props.answer }} />
        </div>
      </ReactCardFlip>
    );
  }
}

export default App;
