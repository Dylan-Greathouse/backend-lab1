const capitalizeAndFilter = (str) => {
    const string = str.map((word) => 
        word.charAt(0).toUpperCase() + word.slice(1)
    );
    const answer = string.filter(item => !item.startsWith('F') && !item.startsWith('f'));
    console.log(answer);
    return answer;
};

export default capitalizeAndFilter;
