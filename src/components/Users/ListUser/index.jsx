import React from 'react';

const ListUsers = ({ users, loading, deleteUser, setEdit }) => {

  return (
    <table style={{fontSize: "25px"}} className="table table-hover">
      <thead className="table-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {
          users.map((user, index) => {
            return (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>
                  <div className='btn-group'>
                    <button onClick={() => setEdit(user)} className='btn btn-primary'>Update</button>
                    <button disabled={loading} onClick={() => deleteUser(user.id)} className='btn btn-danger'>Delete</button>
                  </div>
                </td>
              </tr>
            )
          }) 
        }
      </tbody>
    </table>
  )
}

export default ListUsers
