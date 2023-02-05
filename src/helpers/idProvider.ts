const getUniqueId = (function () {
	let i = 0;

	return function () {
		return (i++).toString();
	};
})();

export default getUniqueId;
