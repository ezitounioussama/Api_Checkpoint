import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./UserList.module.css";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listOfUsers.map((user) => (
          <div key={user.id} className={styles["user-card"]}>
            <h2 className={styles["user-name"]}>{user.name}</h2>
            <p className={styles["user-email"]}>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
