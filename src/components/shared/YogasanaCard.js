import React from 'react';

function YogasanaCard({ yogasana }) {
  return (
    <div className="yogasana-card">
      <img src={yogasana.imageUrl} alt={yogasana.name} />
      <h3>{yogasana.name}</h3>
      <p>{yogasana.benefit}</p>
    </div>
  );
}

export default YogasanaCard;
