import React from 'react';
import './Widgets.css';
import { FiberManualRecord, Info } from '@mui/icons-material';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle} </p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle(
        'Nike',
        'Nike inked its first name, image, and likeness deal with Reilyn Turner, a sophomore on UCLA’s soccer team.'
      )}
      {newsArticle('Google', 'Google’s newsletter project Museletter is shutting down. Long live Museletter.')}
      {newsArticle(
        'Instagram',
        'Instagram surpassed 2 billion monthly users, sources told CNBC, despite bad press throughout the year.'
      )}
      {newsArticle('Apple', 'Apple is renewing in-store mask mandates.')}
      {newsArticle('American Airlines', 'American Airlines named Walton Isaacson as its new multicultural agency.')}
    </div>
  );
}

export default Widgets;
