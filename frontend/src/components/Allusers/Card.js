import React from 'react';
import Avatar from '../Avatar/Avatar';

const Card = ({name, score, id, onRouteChange, onSingleUser}) => {
  const openProfile = () => { onSingleUser(id); onRouteChange('singleUser'); };
  return <article onClick={openProfile} className="leader-card"><Avatar id={id} name={name} size={72}/><div className="leader-info"><h2>{name}</h2><p>Cloud engineering learner</p><strong>{score} <span>points</span></strong></div></article>;
};
export default Card;
