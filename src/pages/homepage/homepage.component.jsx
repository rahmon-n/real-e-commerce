import React from 'react';
import { Link } from 'react-router-dom';
import Directory from '../../components/directory-menu/directory.component';
import './homepage.styles.scss';

export const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
      <Link to={'/about'}>About</Link>
    </div>
  );
};
