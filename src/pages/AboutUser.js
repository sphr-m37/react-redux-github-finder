import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Loader from "../components/UI/Loader";

import { getUser, getRepos } from "../redux/actions";

const AboutUser = () => {
    const { login } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser(login));
        dispatch(getRepos(login, 5));
        // eslint-disable-next-line
    }, []);

    const { user, loading, repos } = useSelector((state) => state);
    const {
        avatar_url,
        hireable,
        bio,
        blog,
        html_url,
        followers,
        followeing,
        public_repos,
        public_gists,
    } = user;
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="container">
                    <div className="user-identify-info">
                        <div className="user-info-left">
                            <img src={avatar_url} alt={avatar_url} />
                            <span>{login}</span>
                        </div>

                        <div className="user-info-right">
                            {hireable && <span>hireable</span>}
                            <span>
                                bio : <span>{bio}</span>
                            </span>
                            <span>
                                blog : <a href={blog} rel="noreferrer" target="_blank">{blog}</a>
                            </span>
                            <span>
                                url : <a href={html_url} target="_blank" rel="noreferrer"> {html_url}</a>
                            </span>
                        </div>
                    </div>
                    <div className="user-details">
                        <span>followers :{followers ? followers : 0}</span>
                        <span>followeing :{followeing ? followeing : 0}</span>
                        <span>public_repos :{public_repos}</span>
                        <span>public_gists :{public_gists}</span>
                    </div>
                    <div className="user-repos">
                        {repos.map((repo, index) => (
                            <a href={repo.html_url} rel="noreferrer" target="_blank" key={index}>
                                {repo.html_url}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutUser;
