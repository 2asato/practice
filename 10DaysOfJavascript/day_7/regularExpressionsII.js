// https://www.hackerrank.com/challenges/js10-regexp-2/problem

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */

    let re = RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])*$');
    // in '' cause matching string
    // ^ beginning of input
    // (Mr|Mrs|Ms|Dr|Er) looking to match any
    // (\\.) followed by .
    // first \ is to escape previous string
    // ([a-zA-Z]) second case must be a-z lower or cap
    // * must be 0 or more of a-zA-Z
    // $ end of input
    /*
     * Do not remove the return statement
     */
    return re;
}
