import axios from "axios";
import React, { useEffect, useState } from "react";
import UserTable from "../../components/userTable/UserTable";
import ConfirmModal from "../../shared/confirmModal/ConfirmModal";

export default function HomePage() {
  const [usersArr, setUsersArr] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [userID, setUserID] = useState();

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
      changeModalFlag();
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const changeModalFlag = () => {
    if (modalFlag === true) {
      setUserID("");
    }
    setModalFlag(!modalFlag);
  };

  return (
    <div>
      {modalFlag && (
        <ConfirmModal closeModal={changeModalFlag} confirmModal={deleteUser} />
      )}
      <h1>OBO JE HOMEPAGE</h1>
      {console.log(userID)}
      <UserTable
        users={usersArr}
        showModalFunc={changeModalFlag}
        sestUserID={setUserID}
      />
    </div>
  );
}
