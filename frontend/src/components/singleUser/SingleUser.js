import React, {Component} from 'react';
import Avatar from '../Avatar/Avatar';

class SingleUser extends Component{
  constructor(props){
    super(props)
    this.state = {
      user: {
        id: '',
        name: '',
        email: '',
        score: 0,
        joined: '',
      }
    }
  };

  componentDidMount = () => {
    fetch(`/api/all/${this.props.num}`)
      .then(response => response.json())
      .then(user => {
        this.setState({user: {
          id: user.id,
          name: user.name,
          email: user.email,
          score: user.score,
          joined: user.joined
        }})
      })
      .catch(err => console.log("err"));
  }

  render() {
    if (this.state.user.id<=0){
      return <h1> </h1>
    } 
    else {
      return (
        <main className="content-page narrow-page"><article className="student-detail panel">
          <Avatar id={this.state.user.id} name={this.state.user.name} size={112}/><span className="eyebrow">LEARNER PROFILE</span>
          <h1>{this.state.user.name}</h1><p>{this.state.user.email}</p>
          <div className="student-stats"><div><strong>{this.state.user.score}</strong><span>Assessment points</span></div><div><strong>{new Date(this.state.user.joined).toLocaleDateString()}</strong><span>Member since</span></div></div>
        </article></main>
    );
    }
  }
}

export default SingleUser;
