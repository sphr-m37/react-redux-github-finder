import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar_url} alt="uses_avatar" />
      <span>{user.login}</span>
      <Link to={`AboutUser/${user.login}`}>more</Link>
    </div>
  );
};

export default Card;
