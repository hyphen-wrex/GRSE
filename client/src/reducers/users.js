import { types } from 'Actions';

const data = [
  {
    username: 'John',
    fullName: 'John Doe',
  },
  {
    username: 'Jane',
    fullName: 'Jane Doe',
  },
  {
    username: 'Brad',
    fullName: 'Brad Doe',
  },
  {
    username: 'Billy',
    fullName: 'Billy Doe',
  },
];


const nodes = (state = data, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default nodes;
