export const CREATE_STORE_TABLE = `
    CREATE TABLE IF NOT EXISTS store(
        id TEXT PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        pictureUrl TEXT NOT NULL,
        price REAL NOT NULL,
        stock INTEGER NOT NULL,
        type TEXT NOT NULL,
        categories TEXT NOT NULL
    );
`;

export const CREATE_FAVOURITES_TABLE = `
    CREATE TABLE IF NOT EXISTS favourites(
        id TEXT PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        pictureUrl TEXT NOT NULL,
        price REAL NOT NULL,
        stock INTEGER NOT NULL,
        type TEXT NOT NULL,
        categories TEXT NOT NULL
    );
`;

export const CREATE_CART_TABLE = `
CREATE TABLE IF NOT EXISTS cart(
    id TEXT PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    pictureUrl TEXT NOT NULL,
    price REAL NOT NULL,
    stock INTEGER NOT NULL,
    type TEXT NOT NULL,
    categories TEXT NOT NULL,
    amount INTEGER NOT NULL,
);
`;

export const CREATE_ORDERS_TABLE = `
    CREATE TABLE IF NOT EXISTS orders(
        id TEXT PRIMARY KEY NOT NULL,
        items TEXT NOT NULL,
        discountPercentage REAL NOT NULL,
        carriagePrice REAL NOT NULL,
        paymentMethod TEXT NOT NULL,
        location TEXT NOT NULL,
        phone TEXT NOT NULL,
        postalCode TEXT NOT NULL,
        totalPrice REAL NOT NULL,
        orderDate TEXT NOT NULL
    );
`;

