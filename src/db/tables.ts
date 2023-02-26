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

export const CREATE_ORDERS_TABLE = `
    CREATE TABLE IF NOT EXISTS orders(
        id INTEGER PRIMARY KEY NOT NULL,
        ownerId INTEGER NOT NULL,
        items TEXT NOT NULL,
        total REAL NOT NULL,
        date TEXT NOT NULL
    );
`;

export const CREATE_AUTH_TABLE = `
    CREATE TABLE IF NOT EXISTS auth(
        id INTEGER PRIMARY KEY NOT NULL,
        userId INTEGER NOT NULL,
        userToken TEXT NOT NULL
    );
`;


export const CREATE_CART_TABLE = `
    CREATE TABLE IF NOT EXISTS cart(
        id INTEGER PRIMARY KEY NOT NULL,
        ownerId INTEGER NOT NULL,
        itemId INTEGER NOT NULL
    );
`;