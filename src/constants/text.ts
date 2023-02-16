const SEARCH_PLACEHOLDER = 'Buscar...';
const NO_ITEMS_MESSAGE = 'No hay items que mostrar 😔';
const ADD_BUTTON_MESSAGE = 'Agregar';
const ALREADY_ADDED_BUTTON_MESSAGE = 'Agregado';
const ADD_TO_CART_BUTTON_MESSAGE = 'Agregar al carrito';
const PRICE_TITLE = 'Precio';
const getPriceDiscountTitle = (discount: number): string => `Precio con ${discount}% de descuento`;
const CURRENCY_SYMBOL = '$';
const HEADER_TITLE = 'Lista de productos';
const CANCEL_TITLE = 'Cancelar';
const CONFIRM_DELETE_ITEM_TITLE = 'Si, borrar';
const DELETE_ITEM_TITLE = 'Borrar item';
const DELETE_ITEM_DESCRIPTION = '¿Estás seguro/a que de que quieres borrar este item?';
const DELETE_ALL_ITEMS_DESCRIPTION = '¿Estás seguro/a de que quieres borrar todos tus items?';
const DELETE_ALL_ITEMS_TITLE = 'Borrar todo';
const CONFIRM_ORDER_TITLE = 'Confirmar orden';
const RECOMMENDED_TITLE = 'Recomendados';
const CATEGORIES_TITLE = 'Categorías';

const BRAND_NAME = 'Scoop';

const TEXT = {
	BRAND_NAME,
	SEARCH_PLACEHOLDER,
	NO_ITEMS_MESSAGE,
	ADD_BUTTON_MESSAGE,
	ADD_TO_CART_BUTTON_MESSAGE,
	ALREADY_ADDED_BUTTON_MESSAGE,
	PRICE_TITLE,
	getPriceDiscountTitle,
	CURRENCY_SYMBOL,
	HEADER_TITLE,
	CANCEL_TITLE,
	RECOMMENDED_TITLE,
	CATEGORIES_TITLE,
	CONFIRM_DELETE_ITEM_TITLE,
	CONFIRM_ORDER_TITLE,
	DELETE_ITEM_TITLE,
	DELETE_ITEM_DESCRIPTION,
	DELETE_ALL_ITEMS_DESCRIPTION,
	DELETE_ALL_ITEMS_TITLE,
};

export default TEXT;
