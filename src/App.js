import React from 'react';
import coverDark from './images/cover-dark.svg';
import coverLight from './images/cover-light.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={coverLight} className="App-logo" alt="logo" />
        <div className="content">
          <h3>ICS Student Council invites you to WebJam, a week-long competition where teams of students will create fully functional web applications! We'll be providing workshops throughout the week to help you get started, and awarding amazing prizes for the best projects out there!</h3>
          <h4 className="accent"><a href="#">Register</a></h4>
          <h4><a href="#">Join our Discord</a></h4>
        </div>
      </header>
      <div className="section schedule">
        <h2>Event Schedule</h2>
        <div className="events">
          <Event name="Kickoff Ceremony" shortDate="11" info="Monday, Oct 11 • ICSSC" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <Event name="Kickoff Ceremony" shortDate="11" info="Monday, Oct 11 • ICSSC" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <Event name="Kickoff Ceremony" shortDate="11" info="Monday, Oct 11 • ICSSC" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
      </div>
      <div className="section faq">
        <h2>FAQs and Rules</h2>
        <div className="questions">
          <Question question="Who?" answer="Me!" />
          <Question question="Who?" answer="Me!" />
          <Question question="Who?" answer="Me!" />
          <Question question="Who?" answer="Me!" />
          <Question question="Who?" answer="Me!" />
          <Question question="Who?" answer="Me!" />
          <Question question="Who?" answer="Me!" />
          <Question question="Who?" answer="Me!" />
          <Question question="Who?" answer="Me!" />
          <Question question="Who?" answer="Me!" />
          <Question question="Who?" answer="Me!" />
          <Question question="Who?" answer="Me!" />
        </div>
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
    this.state = { answered: false };
  }

  handleClick = () => this.setState({ answered: !this.state.answered });

  render() {
    return (
      <div className="Question" onClick={this.handleClick}>
        { this.state.answered ? <p>{ this.props.answer }</p>
          : <h3>{ this.props.question }</h3>
        }
      </div>
    );
  }
}

export default App;
