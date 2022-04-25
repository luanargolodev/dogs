import React from 'react';
import { useParams } from 'react-router-dom';
import Head from '../../helper/Head';
import Feed from '../Feed';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
