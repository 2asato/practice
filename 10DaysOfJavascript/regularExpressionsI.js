function regexVar(str) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
     let re = RegExp(/^([aeiou]).*\1$/);
// ^ checks for match begininning of input
// [aeiou] the character set being checked for
// .* stipulates that the captured character must be followed by zero or more occurrences of any character
// \1 first capture group in our expression (i.e., ([aeiou]). the character following whatever we matched in step 2 must match whatever was captured inside the parentheses in step 1
// $ end of input
    /*
     * Do not remove the return statement
     */
    return re;
}
console.log(regexVar('abcda'));
