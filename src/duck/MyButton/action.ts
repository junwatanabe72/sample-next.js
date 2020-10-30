export interface Action<T> {
  type: 'GET';
  payload: T;
}
export const addUsers = (users: any[]): Action<any[]> => {
  return {
    type: 'GET',
    payload: users,
  };
};
