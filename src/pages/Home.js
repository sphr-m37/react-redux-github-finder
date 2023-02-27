import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoadingOdff } from '../redux/actions';
import AllUsers from "../components/UI/AllUsers";
import Form from "../components/UI/Form";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoadingOdff());
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <Form />
            <div className="container">
                <AllUsers />
            </div>
        </>
    );
};

export default Home;
