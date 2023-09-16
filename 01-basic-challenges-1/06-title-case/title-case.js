function titleCase(str) {
    return str.split(' ').map((str) => str.charAt(0).toUpperCase() + str.substring(1)).join(' ');
}

module.exports = titleCase;
