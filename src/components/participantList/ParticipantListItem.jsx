import React from 'react';
import {
  editParticipant,
  deleteParticipant,
} from '../../features/participant/participantSlice';
import { useDispatch } from 'react-redux';

function ParticipantListItem({ participant }) {
  const { id, name, phoneNo, edit } = participant;
  const dispatch = useDispatch();

  return (
    <tr>
      <td style={edit ? { backgroundColor: 'red' } : null}>{name}</td>
      <td style={edit ? { backgroundColor: 'red' } : null}>{phoneNo}</td>
      <td>
        <button
          type="button"
          className="editButton"
          onClick={() => dispatch(editParticipant(id))}
        >
          edit
        </button>
      </td>
      <td>
        <button
          type="button"
          className="deleteButton"
          onClick={() => dispatch(deleteParticipant(id))}
        >
          delete
        </button>
      </td>
    </tr>
  );
}

export default ParticipantListItem;
