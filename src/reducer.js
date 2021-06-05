import data from "./data";

const reducer = (state, action) => {
    const totalQty = (items) => {
        if (items.length > 0) {
            return items.map((item) => item.quantity).reduce((a, b) => a + b);
        } else {
            return 0;
        }
    };

    const totalAmt = (items) => {
        if (items.length > 0) {
            return items.map((item) => item.amount).reduce((a, b) => a + b);
        } else {
            return 0;
        }
    };

    console.log(`state.selectedItems`, state.cartItems);
    switch (action.type) {
        case "LOAD_BTNS":
            return {...state, category: action.payload };
        case "FILTER_MENU":
            let newMenu = [];
            let filteredMenu = [];

            if (action.payload === "all") {
                newMenu = data.map((el) => {
                    const newItem = state.selectedItems.find(
                        (cart) => cart.id === el.id && cart.isSelected
                    );
                    return newItem ? {...el, ...newItem } : el;
                });
            } else {
                filteredMenu = data.filter((item) => item.category === action.payload);
                newMenu = filteredMenu.map((el) => {
                    const item = state.selectedItems.find((cart) => {
                        return cart.id === el.id && cart.isSelected;
                    });

                    return item ? {...el, ...item } : el;
                });
            }

            return {...state, cartItems: newMenu };
        case "ADD_ITEM":
            const newItem = state.cartItems.map((item) =>
                item.id === action.payload ?
                {
                    ...item,
                    isSelected: !item.isSelected,
                    amount: item.quantity * item.price,
                } :
                item
            );
            const selectedItems = newItem.filter((el) => el.id === action.payload);
            const newArr = [...state.selectedItems, ...selectedItems];

            return {
                ...state,
                cartItems: newItem,
                selectedItems: newArr,
                totalItems: totalQty(newArr),
            };
        case "INCREASE_ITEMS":
            const incItem = state.cartItems.map((item) =>
                item.id === action.payload ?
                {
                    ...item,
                    quantity: item.quantity + 1,
                    amount: item.price * (item.quantity + 1),
                } :
                item
            );
            const incSelected = state.selectedItems.map((item) =>
                item.id === action.payload ?
                {
                    ...item,
                    quantity: item.quantity + 1,
                    amount: item.price * (item.quantity + 1),
                } :
                item
            );

            return {
                ...state,
                cartItems: incItem,
                selectedItems: incSelected,
                totalItems: totalQty(incSelected),
                totalAmount: totalAmt(incSelected),
            };
        case "DECREASE_ITEMS":
            let decSelecItem = [];
            const decItem = state.cartItems.map((item) => {
                if (item.id === action.payload) {
                    if (item.quantity > 1) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                            amount: item.price * (item.quantity - 1),
                        };
                    } else {
                        return {...item, quantity: 1, isSelected: false };
                    }
                } else {
                    return item;
                }
            });

            const itemToRemove = state.selectedItems.find(
                (el) => el.id === action.payload && el.quantity === 1
            );

            if (itemToRemove) {
                decSelecItem = state.selectedItems.filter(
                    (el) => el.id !== itemToRemove.id
                );
            } else {
                // Modifying the quantity from SelectedItems list
                decSelecItem = state.selectedItems.map((item) => {
                    if (item.id === action.payload) {
                        if (item.quantity > 1) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                                amount: item.price * (item.quantity - 1),
                            };
                        }
                    } else {
                        return item;
                    }
                });
            }

            return {
                ...state,
                cartItems: decItem,
                selectedItems: decSelecItem,
                totalItems: totalQty(decSelecItem),
                totalAmount: totalAmt(decSelecItem),
            };

        default:
            throw new Error("no matching action type");
    }
};

export default reducer;