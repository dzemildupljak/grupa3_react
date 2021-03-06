import React from "react";
import "./UserTable.css";

export default function UserTable({
  users,
  showModalFunc,
  sestUserID,
  showProfile,
}) {
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Role</th>
            <th>Is active</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id} onClick={() => showProfile(true)}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.is_active ? "Active" : "Inactive"}</td>
                <td>
                  <button id="editBtn">Edit</button>
                </td>
                <td onClick={(e) => e.stopPropagation()}>
                  <button
                    id="delBtn"
                    onClick={() => {
                      sestUserID(user.id);
                      showModalFunc(true);
                    }}
                  >
                    Del
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
