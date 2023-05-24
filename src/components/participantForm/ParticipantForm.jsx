import React, { useEffect, useState } from 'react';
import './ParticipantForm.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addParticipant,
  updateParticipant,
} from '../../features/participant/participantSlice';

function ParticipantForm() {
  const participants = useSelector((state) => state.participant);
  const participant = participants.find((participant) => participant.edit);

  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (participant) {
      setName(participant.name);
      setPhoneNo(participant.phoneNo);
    } else {
      setName('');
      setPhoneNo('');
    }
  }, [participant]);

  useEffect(() => {
    if (participant) {
      setName(participant.name);
      setPhoneNo(participant.phoneNo);
    } else {
      setName('');
      setPhoneNo('');
    }
  }, [participant]);

  const formHandler = (e) => {
    e.preventDefault();

    if (name !== '' && phoneNo !== '' && !participant) {
      dispatch(addParticipant({ name, phoneNo }));
      setName('');
      setPhoneNo('');
    }
    if (name !== '' && phoneNo !== '' && participant) {
      dispatch(updateParticipant({ id: participant.id, name, phoneNo }));
    }
  };

  return (
    <div className="formContainer">
      <h2 style={{ textAlign: 'center' }}>
        {participant ? 'Edit Participant details' : 'Add a Participant'}
      </h2>
      <form className="myform" onSubmit={formHandler}>
        <input
          type="text"
          placeholder="name"
          required
          className="finput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="phone no."
          required
          className="finput"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <input
          type="submit"
          value={participant ? 'Update Participant' : 'Add Participant'}
          className="fsubmitButton"
        />
      </form>
    </div>
  );
}

export default ParticipantForm;
