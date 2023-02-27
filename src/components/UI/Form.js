import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, clearAll } from "../../redux/actions";
const Form = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim() !== "") {
      dispatch(getUsers(userName));
      setUserName("");
    }
  };
  const [userName, setUserName] = useState("");
  return (
    <div className="container">
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          value={userName}
          type="text"
          placeholder="Enter usernam"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">search</button>
        {users.length > 0 && (
          <button className="clear-all" onClick={() => dispatch(clearAll())}>
            clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
