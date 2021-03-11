const userDataSelector = (state) => state.data || [];

export const userByIdSelector = (state, id) =>
  state.data.find((user) => user.id === id);

export default userDataSelector;
