

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re = RegExp('\\d+', 'g');
    // \d match any digit 0-9
    // g global

    /*
     * Do not remove the return statement
     */
    return re;
}
