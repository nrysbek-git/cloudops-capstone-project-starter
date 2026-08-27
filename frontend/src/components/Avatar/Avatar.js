import React from 'react';

const palettes = [['#22d3ee','#2563eb'],['#a78bfa','#7c3aed'],['#34d399','#059669'],['#fb7185','#e11d48'],['#fbbf24','#d97706']];
const Avatar = ({ id = 0, name = 'Cloud Engineer', size = 96 }) => {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0].toUpperCase()).join('') || 'CE';
  const colors = palettes[Math.abs(Number(id) || 0) % palettes.length];
  return <div className="engineer-avatar" style={{width: size, height: size, background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`}}>{initials}</div>;
};
export default Avatar;
