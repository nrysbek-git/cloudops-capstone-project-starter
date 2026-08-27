import React, { Component}  from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import ErrorBoundry from './ErrorBoundry';

class All extends Component {
  constructor(props) {
    super();
    this.state = {
      robots: [],
      seachField: '',
      id: ''
    }
  }

  componentDidMount() {
    fetch('/api/all')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({seachField: event.target.value.toLowerCase()});
    }

  render() {
    const newRobots = this.state.robots.filter(robot => {
       return robot.name.toLowerCase().includes(this.state.seachField);
    })
    return (
    <main className="content-page">
      <header className="page-heading"><span className="eyebrow">COMMUNITY</span><h1>DevOps leaderboard</h1><p>Explore learner profiles and compare assessment progress.</p></header>
      <section className="leaderboard-panel panel">
        <SearchBox onSearchChange={this.onSearchChange}/>
          <ErrorBoundry>
            <CardList robots={newRobots} onRouteChange={this.props.onRouteChange} onSingleUser={this.props.onSingleUser}/>
          </ErrorBoundry>
      </section>
    </main>
    )
  }
}

export default All;
