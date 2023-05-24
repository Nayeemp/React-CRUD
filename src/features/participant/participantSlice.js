/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: crypto.randomUUID(),
    name: 'Nayeem',
    phoneNo: '019',
    edit: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Rasel',
    phoneNo: '017',
    edit: false,
  },
];
const participantSlice = createSlice({
  name: 'participant',
  initialState,
  reducers: {
    addParticipant: (state, action) => {
      const { name, phoneNo } = action.payload;
      state.push({ id: crypto.randomUUID(), name, phoneNo, edit: false });
    },

    deleteParticipant: (state, action) => {
      const targetID = action.payload;

      return state.filter((participant) => {
        if (participant.id !== targetID) {
          return true;
        }
        return false;
      });
    },

    editParticipant: (state, action) => {
      const targetID = action.payload;
      return state.map((participant) => {
        if (participant.id === targetID) {
          return { ...participant, edit: true };
        }

        return { ...participant, edit: false };
      });
    },

    updateParticipant: (state, action) => {
      const { id: targetID, name, phoneNo } = action.payload;
      console.log('inside Edit');
      console.log('action.payload = ', action.payload);
      return state.map((participant) => {
        if (participant.id === targetID) {
          return { ...participant, name: name, phoneNo: phoneNo, edit: false };
        }
        return participant;
      });
    },
  },
});

export default participantSlice.reducer;
export const {
  addParticipant,
  editParticipant,
  updateParticipant,
  deleteParticipant,
} = participantSlice.actions;
