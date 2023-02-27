import { useSelector } from "react-redux";
import Card from "./Card";
import Loader from "./Loader";
const AllUsers = () => {
    const { users, loading } = useSelector((state) => state);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="users">
                    {users.map((user) => (
                        <Card key={user.id} user={user} />
                    ))}
                </div>
            )}

            {users.length === 0 && (
                <h1 style={{ textAlign: "center" }}>no result yet ...</h1>
            )}
        </>
    );
};

export default AllUsers;
