import React, { useState, useEffect } from 'react'

const UserForm = ({ edit, setEdit, createUsers, loading, updateUsers }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if(edit){
      setName(edit.name)
    }
  }, [edit]) 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(edit) {
      updateUsers({
        ...edit,
        name
      })
    } else {
      createUsers({
        name
      });
    }
    setName('');
    setEdit(undefined);
  }
  return (
    <form onSubmit={handleSubmit} style={{marginLeft: "auto"}} className="row g-3">
        <div style={{width: '71%'}} className="col-auto">
          <input name='name' onChange={(e) => setName(e.target.value)} value={name} className="form-control" placeholder="User"/>
        </div>
        <div className="col-auto">
          <button disabled={loading} type="submit" className="btn btn-primary mb-3">{ edit ? "Update User" : "Create User" }</button>
        </div>
    </form>
  )
}

export default UserForm
