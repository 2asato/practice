function regexVar(str) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
     let re = /aeiou/;
     let split = str.split('');
    //  console.log(split);
    if (split[0] == re && split[split.length - 1] == re) {
      re = true;
    } else {
      re = false;
    }
    /*
     * Do not remove the return statement
     */
    return re;
}
console.log(regexVar('abcde'));
