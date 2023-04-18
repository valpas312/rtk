//funcion para agregar productos con la misma id
export const addAProduct = (cart, product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
        return cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }
    return [...cart, { ...product, quantity: 1 }];
};

//funcion para elminar productos con la misma id
export const removeAProduct = (cart, productId) => {
    const productExists = cart.find((item) => item.id === productId);
    if (productExists.quantity === 1) {
        return cart.filter((item) => item.id !== productId);
    }
    return cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
};