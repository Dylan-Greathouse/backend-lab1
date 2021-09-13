const capitalizeAndFilter = (str) => {
    for (let i = 0; i < str.length; i++) { 
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    const newArr = str.filter(word => !word.startsWith('F') && !word.startsWith('f'));
    return newArr;
};

export default capitalizeAndFilter;
