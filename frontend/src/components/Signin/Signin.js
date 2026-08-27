import React from 'react';

class Signin extends React.Component {
  state = { email: '', password: '', error: '' };
  submit = () => {
    if (!this.state.email || !this.state.password) return this.setState({error: 'Enter your email and password.'});
    fetch('/api/signin', {method:'post', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email:this.state.email,password:this.state.password})})
      .then(response => response.json()).then(user => { if (user.id) { this.props.loadUser(user); this.props.onRouteChange('home'); } else this.setState({error:'Unable to sign in.'}); })
      .catch(() => this.setState({error:'API is unavailable. Try again shortly.'}));
  };
  render() { return <main className="auth-page"><section className="auth-intro"><span className="eyebrow">LEARN • BUILD • OPERATE</span><h1>Advance your cloud operations career.</h1><p>Hands-on assessments for the tools modern DevOps teams use every day.</p><div className="auth-topics">Kubernetes · Terraform · AWS · Docker · CI/CD</div></section><section className="auth-card panel"><span className="eyebrow">WELCOME BACK</span><h2>Sign in to your workspace</h2><label>Email<input type="email" onChange={event => this.setState({email:event.target.value})}/></label><label>Password<input type="password" onChange={event => this.setState({password:event.target.value})}/></label>{this.state.error && <p className="form-error">{this.state.error}</p>}<button className="primary-button" onClick={this.submit}>Sign in</button><p className="form-switch">New to CloudOps Academy? <button onClick={() => this.props.onRouteChange('register')}>Create account</button></p></section></main>; }
}
export default Signin;
