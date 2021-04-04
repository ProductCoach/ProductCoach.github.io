var ramadan2021timings = [
{"Day":"Wednesday","Date":"April 14","Ramadan":1,"Sehri":"4:37 AM","Iftar":"6:37 PM"},
{"Day":"Thursday","Date":"April 15","Ramadan":2,"Sehri":"4:36 AM","Iftar":"6:38 PM"},
{"Day":"Friday","Date":"April 16","Ramadan":3,"Sehri":"4:36 AM","Iftar":"6:38 PM"},
{"Day":"Saturday","Date":"April 17","Ramadan":4,"Sehri":"4:35 AM","Iftar":"6:38 PM"},
{"Day":"Sunday","Date":"April 18","Ramadan":5,"Sehri":"4:33 AM","Iftar":"6:38 PM"},
{"Day":"Monday","Date":"April 19","Ramadan":6,"Sehri":"4:33 AM","Iftar":"6:38 PM"},
{"Day":"Tuesday","Date":"April 20","Ramadan":7,"Sehri":"4:32 AM","Iftar":"6:39 PM"},
{"Day":"Wednesday","Date":"April 21","Ramadan":8,"Sehri":"4:32 AM","Iftar":"6:39 PM"},
{"Day":"Thursday","Date":"April 22","Ramadan":9,"Sehri":"4:31 AM","Iftar":"6:40 PM"},
{"Day":"Friday","Date":"April 23","Ramadan":10,"Sehri":"4:30 AM","Iftar":"6:39 PM"},
{"Day":"Saturday","Date":"April 24","Ramadan":11,"Sehri":"4:29 AM","Iftar":"6:40 PM"},
{"Day":"Sunday","Date":"April 25","Ramadan":12,"Sehri":"4:29 AM","Iftar":"6:40 PM"},
{"Day":"Monday","Date":"April 26","Ramadan":13,"Sehri":"4:28 AM","Iftar":"6:40 PM"},
{"Day":"Tuesday","Date":"April 27","Ramadan":14,"Sehri":"4:28 AM","Iftar":"6:41 PM"},
{"Day":"Wednesday","Date":"April 28","Ramadan":15,"Sehri":"4:26 AM","Iftar":"6:40 PM"},
{"Day":"Thursday","Date":"April 29","Ramadan":16,"Sehri":"4:25 AM","Iftar":"6:41 PM"},
{"Day":"Friday","Date":"April 30","Ramadan":17,"Sehri":"4:25 AM","Iftar":"6:41 PM"},
{"Day":"Saturday","Date":"May 1","Ramadan":18,"Sehri":"4:24 AM","Iftar":"6:42 PM"},
{"Day":"Sunday","Date":"May 2","Ramadan":19,"Sehri":"4:24 AM","Iftar":"6:42 PM"},
{"Day":"Monday","Date":"May 3","Ramadan":20,"Sehri":"4:23 AM","Iftar":"6:43 PM"},
{"Day":"Tuesday","Date":"May 4","Ramadan":21,"Sehri":"4:22 AM","Iftar":"6:43 PM"},
{"Day":"Wednesday","Date":"May 5","Ramadan":22,"Sehri":"4:22 AM","Iftar":"6:43 PM"},
{"Day":"Thursday","Date":"May 6","Ramadan":23,"Sehri":"4:21 AM","Iftar":"6:44 PM"},
{"Day":"Friday","Date":"May 7","Ramadan":24,"Sehri":"4:20 AM","Iftar":"6:43 PM"},
{"Day":"Saturday","Date":"May 8","Ramadan":25,"Sehri":"4:19 AM","Iftar":"6:43 PM"},
{"Day":"Sunday","Date":"May 9","Ramadan":26,"Sehri":"4:18 AM","Iftar":"6:44 PM"},
{"Day":"Monday","Date":"May 10","Ramadan":27,"Sehri":"4:18 AM","Iftar":"6:44 PM"},
{"Day":"Tuesday","Date":"May 11","Ramadan":28,"Sehri":"4:17 AM","Iftar":"6:45 PM"},
{"Day":"Wednesday","Date":"May 12","Ramadan":29,"Sehri":"4:17 AM","Iftar":"6:45 PM"},
{"Day":"Thursday","Date":"May 13","Ramadan":30,"Sehri":"4:16 AM","Iftar":"6:45 PM"}];


const TodayDateEnglish = document.querySelector("#todaydateEng");
const previousDateEnglish = document.querySelector("#previousdateEng");
const nextDateEnglish = document.querySelector("#nextdateEng");

const TodayDateRamadan = document.querySelector("#todaydateRamadan");
const PreviousDateRamadan = TodayDateRamadan-1;
const NextDateRamadan = TodayDateRamadan+1;

const TodaySuhoorTime = document.querySelector("#suhoortime");
const previousSuhoorTime = document.querySelector("#suhoortimeprevious");
const nextSuhoorTime = document.querySelector("#suhoortimenext");

const TodayIftarTime = document.querySelector("#iftartime");
const previousIftarTime = document.querySelector("#iftartimeprevious");
const nextIftarTime = document.querySelector("#iftartimenext");

const nextdayselect = document.querySelector(".nextdayselect");
const previousdayselect = document.querySelector(".previousdayselect");

// var today = new Date();
// var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
// var dd = parseInt(String(today.getDate()).padStart(2, '0'));
// var mm = parseInt(String(today.getMonth() + 1).padStart(2, '0'));
// var yyyy = today.getFullYear();

// RozaNumber = parseInt(TodayDateRamadan.textContent)

// if (yyyy = '2021' && mm <= 4 && dd < 14) 
// {
//     RozaNumber = 1;
//     updateValues(RozaNumber);
// } else if (yyyy = '2021' && mm >= 5 && dd >= 14) {
//     RozaNumber = 30;
//     updateValues(RozaNumber);
// } else if (mm == 4) {
//     RozaNumber = dd - 13;
// } else {
//     RozaNumber = dd + 17;
// }

function setInitialValues() {
    var today = new Date();
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    var dd = parseInt(String(today.getDate()).padStart(2, '0'));
    var mm = parseInt(String(today.getMonth() + 1).padStart(2, '0'));
    var yyyy = today.getFullYear();

    RozaNumber = parseInt(TodayDateRamadan.textContent)

    if (yyyy = '2021' && mm <= 4 && dd < 14) 
    {
        RozaNumber = 1;
        updateValues(RozaNumber);
        return RozaNumber
    } else if (yyyy = '2021' && mm >= 5 && dd >= 14) {
        RozaNumber = 30;
        updateValues(RozaNumber);
        return RozaNumber
    } else if (mm == 4) {
        RozaNumber = dd - 13;
        updateValues(RozaNumber);
        return RozaNumber
    } else {
        RozaNumber = dd + 17;
        updateValues(RozaNumber);
        return RozaNumber
    }
}

RozaNumber = setInitialValues()

console.log(`${ramadan2021timings[TodayDateRamadan.textContent-1].Sehri} to ${ramadan2021timings[TodayDateRamadan.textContent-1].Iftar}`)

function updateValues(RozaNumber) {
    
    TodayDateRamadan.textContent = RozaNumber;

    if (RozaNumber == 1) {
            // Main Card Update
        TodayDateEnglish.textContent = ramadan2021timings[RozaNumber-1].Date; 
        TodaySuhoorTime.textContent = ramadan2021timings[RozaNumber-1].Sehri;
        TodayIftarTime.textContent = ramadan2021timings[RozaNumber-1].Iftar;

        // Previous Day Timings Update
        previousDateEnglish.textContent = ramadan2021timings[RozaNumber-1].Date; 
        previousSuhoorTime.textContent = ramadan2021timings[RozaNumber-1].Sehri;
        previousIftarTime.textContent = ramadan2021timings[RozaNumber-1].Iftar;

        // Next Day Timings Update
        nextDateEnglish.textContent = ramadan2021timings[RozaNumber].Date; 
        nextSuhoorTime.textContent = ramadan2021timings[RozaNumber].Sehri;
        nextIftarTime.textContent = ramadan2021timings[RozaNumber].Iftar;

        //disable Previous Day button
        previousdayselect.classList.add('disabled')
        previousdayselect.classList.add('disablebutton')

    }
    else if (RozaNumber == 30) {
        // Main Card Update
        TodayDateEnglish.textContent = ramadan2021timings[RozaNumber-1].Date; 
        TodaySuhoorTime.textContent = ramadan2021timings[RozaNumber-1].Sehri;
        TodayIftarTime.textContent = ramadan2021timings[RozaNumber-1].Iftar;

        // Previous Day Timings Update
        previousDateEnglish.textContent = ramadan2021timings[RozaNumber-2].Date; 
        previousSuhoorTime.textContent = ramadan2021timings[RozaNumber-2].Sehri;
        previousIftarTime.textContent = ramadan2021timings[RozaNumber-2].Iftar;

        // Next Day Timings Update
        nextDateEnglish.textContent = ramadan2021timings[RozaNumber-1].Date; 
        nextSuhoorTime.textContent = ramadan2021timings[RozaNumber-1].Sehri;
        nextIftarTime.textContent = ramadan2021timings[RozaNumber-1].Iftar;

        //disable Previous Day button
        nextdayselect.classList.add('disabled')
        nextdayselect.classList.add('disablebutton')

    } else {

        nextdayselect.classList.remove('disabled')
        nextdayselect.classList.remove('disablebutton')
        previousdayselect.classList.remove('disabled')
        previousdayselect.classList.remove('disablebutton')

        TodayDateEnglish.textContent = ramadan2021timings[RozaNumber-1].Date; 
        TodaySuhoorTime.textContent = ramadan2021timings[RozaNumber-1].Sehri;
        TodayIftarTime.textContent = ramadan2021timings[RozaNumber-1].Iftar;
    
        previousDateEnglish.textContent = ramadan2021timings[RozaNumber-2].Date; 
        previousSuhoorTime.textContent = ramadan2021timings[RozaNumber-2].Sehri;
        previousIftarTime.textContent = ramadan2021timings[RozaNumber-2].Iftar;
    
        nextDateEnglish.textContent = ramadan2021timings[RozaNumber].Date; 
        nextSuhoorTime.textContent = ramadan2021timings[RozaNumber].Sehri;
        nextIftarTime.textContent = ramadan2021timings[RozaNumber].Iftar;

    }
}

nextdayselect.addEventListener('click', function() {
    
    if (RozaNumber < 30) {
        RozaNumber += 1;
        updateValues(RozaNumber)
    }

})

previousdayselect.addEventListener('click', function() {
    if (RozaNumber > 1) {
        RozaNumber = RozaNumber - 1;
        TodayDateRamadan.textContent = RozaNumber;
        updateValues(RozaNumber)
    }

})
