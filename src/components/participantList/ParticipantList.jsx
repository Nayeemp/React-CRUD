import React from 'react';
import './ParticipantList.css';
import { useSelector } from 'react-redux';
import ParticipantListItem from './ParticipantListItem';

function ParticipantList() {
  const participants = useSelector((state) => state.participant);
  const searchText = useSelector((state) => state.search.searchKeyword);
  return (
    <div className="participantListContainer">
      <h2 style={{ textAlign: 'center' }}>Participant List</h2>
      <br />

      <table id="customers">
        <thead>
          <tr>
            <th>Participant</th>
            <th>Phone no.</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {participants
            .filter((participant) => {
              if (searchText?.length) {
                if (
                  participant.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                ) {
                  return true;
                }
                return false;
              }
              return true;
            })
            .map((participant) => (
              <ParticipantListItem
                participant={participant}
                key={participant.id}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParticipantList;
