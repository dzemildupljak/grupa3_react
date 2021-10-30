import axios from "axios";
import React, { useEffect, useState } from "react";
import UserTable from "../../components/userTable/UserTable";
import ConfirmModal from "../../shared/confirmModal/ConfirmModal";

export default function HomePage() {
  const [usersArr, setUsersArr] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userID, setUserID] = useState();
  const [userProfileModal, setUserProfileModal] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://centarnitbe.herokuapp.com/user/all"
      );

      setUsersArr(response.data);
    } catch (error) {
      console.log(error, "OVO JE NASA GRESKAAA!");
    }
  };

  const deleteUser = async () => {
    try {
      // await axios.delete(`https://centarnitbe.herokuapp.com/user/${userId}`)
      await axios.delete(
        `https://centarnitbe.herokuapp.com/user/hard_delete/${userID}`
      );
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  const delModalHandle = (val) => {
    setDeleteModal(val);
  };

  const userProfModal = (val) => {
    setUserProfileModal(val);
  };
  return (
    <div>
      {console.log(deleteModal)}
      {deleteModal && (
        <ConfirmModal closeModal={delModalHandle} confirmModal={deleteUser}>
          <p>Da li ste sigurni da cete da izbrisete user-a</p>
        </ConfirmModal>
      )}
      {userProfileModal && (
        <ConfirmModal closeModal={userProfModal}>
          <p>OVO JE PORFIL USERA!!!</p>
        </ConfirmModal>
      )}
      <h1>OBO JE HOMEPAGE</h1>
      <UserTable
        users={usersArr}
        showModalFunc={delModalHandle}
        showProfile={userProfModal}
        sestUserID={setUserID}
      />
    </div>
  );
}
