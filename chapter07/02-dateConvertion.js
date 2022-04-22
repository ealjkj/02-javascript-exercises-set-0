function dateTransform(dateString) {
    //Should be an input of the form "Language-Region: Date"
    //Get language
    let language = dateString.match(/(\w+)-/)[1]
    
    if(language.toUpperCase() === "ENGLISH") {
        let engRegexp = /\w+-\w+:\s+(\d{1,2})\/(\d{1,2})\/(\d{4})/i;
        let month = dateString.match(/(\d{1,2})\/\d{1,2}\/\d{4}/)[1];
        let day = dateString.match(/(\d{1,2})\/\d{4}/)[1];
        let holiday = '';

        //fill with zeros at the left
        month = ('00' + month).slice(-2);
        day = ('00' + day).slice(-2);
        let monthDay = `${month}/${day}`;
        if(monthDay in japanHolidays)  holiday = ' (' +japanHolidays[monthDay] + ')';

        let jpnNewString = dateString.replace(engRegexp, 'Japanese-JN: $3/$1/$2');
        return jpnNewString + holiday;
    } else if (language.toUpperCase() === "JAPANESE") {
        let jpnRegexp = /\w+-\w+:\s+(\d{4})\/(\d{1,2})\/(\d{1,2})/i;
        let month = dateString.match(/\d{4}\/(\d{1,2})/)[1];
        let day = dateString.match(/\d{4}\/\d{1,2}\/(\d{1,2})/)[1];
        let holiday = '';

        //fill with zeros at the left
        month = ('00' + month).slice(-2);
        day = ('00' + day).slice(-2);
        let monthDay = `${month}/${day}`;
        if(monthDay in usaHolidays)  holiday = ' (' +usaHolidays[monthDay] + ')';

        let engNewString =  dateString.replace(jpnRegexp, 'English-US: $2/$3/$1');
        return engNewString + holiday;
    }    
}

japanHolidays = {
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

usaHolidays = {
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

console.log(dateTransform("English-US: 08/11/2014"));
console.log(dateTransform("Japanese-JP: 2016/07/4"));
