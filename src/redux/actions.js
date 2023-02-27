import axios from "axios";
//****************************** */
export const getUsers = (userName) => async (dispatch) => {
    dispatch({ type: "setLoading" });
    try {
        const { data } = await axios.get(
            `https://api.github.com/search/users?q=${userName}&client_id=0c6cd4ccb1ce951c33e8&client_secret=476b4c701be79963758c85e5c53d8e5a2d75c8ec`
        );
        dispatch({ type: "getUsers", payload: data.items });
    } catch (error) {
        console.log(error)
    }


};
//********************************* */
export const getUser = (login) => async (dispatch) => {
    dispatch({ type: "setLoading" });
    try {
        const { data } = await axios.get(
            `https://api.github.com/users/${login}?client_id=0c6cd4ccb1ce951c33e8&client_secret=476b4c701be79963758c85e5c53d8e5a2d75c8ec`
        );
        dispatch({ type: "getUser", payload: data });
    } catch (error) {
        console.log(error)

    }


};
//************************************************* */
export const getRepos = (login, repoCount) => async (dispatch) => {
    try {
        const { data } = await axios.get(
            `https://api.github.com/users/${login}/repos?per_page=${repoCount}&sort=created:asc&client_id=0c6cd4ccb1ce951c33e8&client_secret=476b4c701be79963758c85e5c53d8e5a2d75c8ec`
        );
        dispatch({ type: "getrepos", payload: data });
    } catch (error) {
        console.log(error)
    }

};
///////////////////////////////
export const clearAll = () => (dispatch) => {
    dispatch({ type: "clearAll" });
};

export const setLoadingOdff = () => (dispatch) => {
    dispatch({ type: "setLoadingOdff" });
};
