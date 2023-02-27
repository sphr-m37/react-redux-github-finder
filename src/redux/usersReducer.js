const init = {
    users: [],
    user: {},
    repos: [],
    loading: false,
};

const usersReducer = (state = init, action) => {
    switch (action.type) {
        case "setLoading":
            return { ...state, loading: true };
        case "getUsers":
            return { ...state, users: action.payload, loading: false };
        case "getUser":
            return { ...state, user: action.payload, loading: false };
        case "getrepos":
            return { ...state, repos: action.payload };
        case "clearAll":
            return { ...state, users: [], loading: false };
        case "setLoadingOdff":
            return { ...state, loading: false };

        default:
            return state;
    }
};

export default usersReducer;
