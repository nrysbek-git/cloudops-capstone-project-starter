import React, {Component} from 'react';
import './QuizMain.css';

const questions = [
  {q:'Which Kubernetes object maintains the desired number of application replicas?', a:['Service','Deployment','ConfigMap'], correct:1},
  {q:'What does Terraform state primarily track?', a:['Application logs','Mapping between configuration and real infrastructure','Docker image layers'], correct:1},
  {q:'Which Dockerfile pattern produces a smaller production image?', a:['Multi-stage build','Running as root','Copying node_modules from the laptop'], correct:0},
  {q:'Where should EKS worker nodes normally run?', a:['Private subnets','A public S3 bucket','Outside the VPC'], correct:0},
  {q:'What is the purpose of a Kubernetes readiness probe?', a:['Encrypt Secrets','Decide when a Pod can receive traffic','Create a Load Balancer'], correct:1},
  {q:'Why use GitHub OIDC with AWS?', a:['To store permanent AWS keys','To obtain short-lived credentials','To replace Git commits'], correct:1},
  {q:'Which AWS service stores private Docker images?', a:['ECR','Route 53','CloudFront'], correct:0},
  {q:'What does a NAT Gateway provide to private subnets?', a:['Inbound public access','Outbound internet access','Database backups'], correct:1},
  {q:'Which command previews Terraform changes without applying them?', a:['terraform plan','terraform destroy','terraform output'], correct:0},
  {q:'Which principle gives an IAM role only the permissions it needs?', a:['High availability','Least privilege','Horizontal scaling'], correct:1}
];

export default class Quiz extends Component {
  state={step:0,selected:null,score:0,finished:false,saved:false};
  select = index => { if(this.state.selected !== null) return; this.setState({selected:index,score:this.state.score+(index===questions[this.state.step].correct?1:0)}); };
  next = () => this.state.step === questions.length-1 ? this.finish() : this.setState({step:this.state.step+1,selected:null});
  finish = () => this.setState({finished:true},()=>fetch('/api/score',{method:'put',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:this.props.id,score:this.state.score})}).then(r=>r.json()).then(score=>{this.props.onQuizFinish(score);this.setState({saved:true});}));
  render(){ if(this.state.finished) return <main className="assessment-page"><section className="assessment-card panel result-card"><span className="eyebrow">ASSESSMENT COMPLETE</span><h1>{this.state.score}/10</h1><p>{this.state.score>=8?'Strong cloud operations foundation.':this.state.score>=5?'Good start. Review the topics and try again.':'Keep learning—the infrastructure guide is a good next step.'}</p><button className="primary-button" onClick={()=>this.props.onRouteChange('home')}>Return to dashboard</button></section></main>;
    const item=questions[this.state.step]; return <main className="assessment-page"><section className="assessment-card panel"><div className="assessment-progress"><span>DevOps foundations</span><strong>{this.state.step+1} / {questions.length}</strong></div><div className="progress-track"><span style={{width:`${(this.state.step+1)*10}%`}}/></div><h1>{item.q}</h1><div className="answer-list">{item.a.map((answer,index)=><button key={answer} onClick={()=>this.select(index)} className={this.state.selected===null?'':index===item.correct?'correct':index===this.state.selected?'incorrect':''}>{answer}</button>)}</div><button className="primary-button next-button" disabled={this.state.selected===null} onClick={this.next}>{this.state.step===questions.length-1?'Finish assessment':'Next question'}</button></section></main>; }
}
