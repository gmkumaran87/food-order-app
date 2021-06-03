const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return state;
        default:
            throw new Error("no matching action type");
    }
};

export default reducer;