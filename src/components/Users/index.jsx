import React, { useState, useEffect } from 'react';
import stores from '../../store/stores';
import UserForm from './Form';
import ListUsers from './ListUser';

const Users = () => {
  const [ edit, setEdit ] = useState();
  const { userState: {loading, error, users}, getUsers, deleteUser, createUsers, updateUsers } = stores();

  useEffect(() => {
    getUsers();
  }, [getUsers])

  return (
    <div style={{width: '500px', margin: "8rem auto"}} className='user-page'>
      <h1 style={{marginBottom: "50px"}} className='title-page'>Users page:</h1>
      <UserForm loading={loading} createUsers={createUsers} edit={edit} setEdit={setEdit} updateUsers={updateUsers}/>
      {users.length > 0 && <ListUsers deleteUser={deleteUser} loading={loading} users={users} setEdit={setEdit}/>}
      {loading && <span style={{fontSize: "25px"}}>Loading...</span>}
      {error && <span style={{fontSize: "25px"}}>{error}</span>}
    </div>
  )
}

export default Users;
