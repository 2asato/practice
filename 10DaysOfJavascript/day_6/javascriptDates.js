https://www.hackerrank.com/challenges/js10-date/problem

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let nameOfDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date(dateString);
    dayName = nameOfDay[date.getDay()];
    return dayName;
}
console.log(getDayName('04/16/2018'));
