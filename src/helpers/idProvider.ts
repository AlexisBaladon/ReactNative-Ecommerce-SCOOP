var getUniqueId = (function () {
    var i = 0;

    return function () {
        return (i++).toString();
    }
})();

export default getUniqueId;