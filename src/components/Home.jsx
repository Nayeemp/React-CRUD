import React from 'react';
import Header from './header/Header';
import ParticipantForm from './participantForm/ParticipantForm';
import ParticipantList from './participantList/ParticipantList';

function Home() {
  return (
    <>
      <Header />
      <ParticipantForm />
      <ParticipantList />
    </>
  );
}

export default Home;
