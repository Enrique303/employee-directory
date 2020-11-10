import React from 'react';

const DataBody = ({ users }) => {
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ name, picture, email, phone }) => {
          return (
          <tr>
          <td><img src={picture.medium}></img></td>
          <td>{name.first} {name.last}</td>
          <td>{phone}</td>
          <td>{email}</td>
         </tr>
          )
        })
      ) : (
       <>
       </>
      )}
    </tbody>
  )
}

export default DataBody;