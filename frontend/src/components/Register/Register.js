import React from 'react';

class Register extends React.Component {
  state = {name:'', email:'', password:'', error:''};
  submit = () => {
    const {name,email,password} = this.state;
    if (!name || !email || !password) return this.setState({error:'Complete every field.'});
    fetch('/api/register',{method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,password})})
      .then(response => { if (!response.ok) throw new Error(); this.props.onRouteChange('signin'); })
      .catch(() => this.setState({error:'Registration failed. The email may already exist.'}));
  };
  render(){ return <main className="auth-page"><section className="auth-intro"><span className="eyebrow">START YOUR LEARNING PATH</span><h1>Become confident operating cloud infrastructure.</h1><p>Create a learner profile, complete the assessment and track your progress.</p></section><section className="auth-card panel"><span className="eyebrow">CREATE ACCOUNT</span><h2>Join CloudOps Academy</h2><label>Full name<input type="text" onChange={e=>this.setState({name:e.target.value})}/></label><label>Email<input type="email" onChange={e=>this.setState({email:e.target.value})}/></label><label>Password<input type="password" onChange={e=>this.setState({password:e.target.value})}/></label>{this.state.error&&<p className="form-error">{this.state.error}</p>}<button className="primary-button" onClick={this.submit}>Create account</button><p className="form-switch">Already registered? <button onClick={()=>this.props.onRouteChange('signin')}>Sign in</button></p></section></main>;}
}
export default Register;
