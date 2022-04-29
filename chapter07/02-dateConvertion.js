function usToJp(string) {
    let engRegexp = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/i
    let engDay = ('00' + string.match(engRegexp)[1]).slice(-2) + '/' + ('00' + string.match(engRegexp)[2]).slice(-2);
    return string.replace(engRegexp, '$3/$1/$2') + ` (${japanHolidays[engDay]})`;
}

function jpToUs(string) {
    let jpnRegexp = /(\d{4})\/(\d{1,2})\/(\d{1,2})/i
    let engDay = ('00' + string.match(jpnRegexp)[2]).slice(-2) + '/' + ('00' + string.match(jpnRegexp)[3]).slice(-2);
    return string.replace(jpnRegexp, '$2/$3/$1') + ` (${usaHolidays[engDay]})`;
}

const japanHolidays = {
    '01/01': "New Year's Day",
    '02/11': "Foundation Day",
    '03/21': "Vernal Equinox Day",
    '04/29': "Showa Day",
    '05/03': "Constitution Day",
    '05/04': "Greenery Day",
    '05/05': "Children's Day",
    '08/11': "Mountain Day",
    '09/23': "Autumn Equinox Day",
    '11/03': "Culutre Day",
    '11/23': "Labor Thanksgiving day",
    '12/23': "Culutre Day",
}

const usaHolidays = {
    '01/17': "Martin Lugher King, Jr.Day",
    '02/21': "George Washington's Birthday",
    '05/30': "Memorial Day",
    '06/21': "Juneteenth",
    '07/04': "Independence Day",   
    '09/05': "Labor Day",   
    '10/10': "Columbus Day",   
    '11/11': "Veterans Day",   
    '11/24': "Thanksgiving Day",   
    '12/26': "Chrismas Day",   
    '12/31': "New Year's Day",   
}

// console.log(dateTransform("08/11/2014"));
console.log(usToJp("08/11/2014"));

// console.log(dateTransform("2016/07/4"));
console.log(jpToUs("2016/07/4"));
