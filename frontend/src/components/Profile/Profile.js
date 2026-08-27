import React from 'react';
import Avatar from '../Avatar/Avatar';

const Profile = ({id, name, score}) => <main className="dashboard-page">
  <section className="hero-panel"><div className="hero-copy"><span className="eyebrow">DEVOPS LEARNING PLATFORM</span><h1>Build practical cloud engineering skills.</h1><p>Validate your knowledge across containers, Kubernetes, Terraform, AWS, networking and CI/CD.</p></div></section>
  <section className="dashboard-grid">
    <article className="profile-card panel"><Avatar id={id} name={name} size={88}/><div><span className="eyebrow">LEARNER PROFILE</span><h2>{name}</h2><p>Cloud engineering track</p></div></article>
    <article className="metric-card panel"><span>Assessment score</span><strong>{score}<small>/10</small></strong><p>Complete an assessment to update your result.</p></article>
    <article className="skills-card panel"><span className="eyebrow">CURRICULUM</span><div className="skill-tags">{['Linux','Docker','Kubernetes','Terraform','AWS','CI/CD'].map(skill => <span key={skill}>{skill}</span>)}</div></article>
  </section>
</main>;
export default Profile;
