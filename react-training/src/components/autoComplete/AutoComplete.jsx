import { useCallback, useEffect, useState } from "react";
import "./styles.css";

const AutoComplete = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data.users.map((user) => user.firstName));
      if (data && data.users) {
        /* setUsers((prevUsers) => [
          
          ...data.users.map((user) => user.firstName),
        ]); */
        setUsers(data.users.map((user) => user.firstName));
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleOnChange = (e) => {
    setInput(e.target.value);
    const query = e.target.value.toLowerCase();
    if (query.length > 0) {
      if (users && users.length > 0) {
        const filteredUsers = users.filter(
          (user) =>
            user.toLowerCase().includes(query) &&
            user[0].toLowerCase() === query[0]
        );
        setFilteredUsers(filteredUsers);
      }
    }
  };

  loading && <div>Loading...</div>;
  error && <div>Error: {error.message}</div>;

  console.log("users", users);

  return (
    <div className="container">
      <div className="input">
        <input
          type="text"
          value={input}
          placeholder="Search..."
          onChange={handleOnChange}
        />
      </div>
      {filteredUsers.length > 0 && input.length > 0
        ? filteredUsers.map((user, index) => (
            <div key={index} className="user">
              {user}
            </div>
          ))
        : null}
    </div>
  );
};

export default AutoComplete;
