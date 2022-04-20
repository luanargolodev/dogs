import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserHeader from '../../components/UserHeader';
import Feed from '../../components/Feed';
import UserPhotoPost from '../../components/UserPhotoPost';
import UserStats from '../../components/UserStats';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
