const hour = document.getElementById('hour'); 
const minute = document.getElementById('minute'); 
const second = document.getElementById('second'); 

const duration = document.getElementById('duration');

// clock function.
function clock() {
    
    const today = new Date();
    
    let currentHour = today.getHours();
    const currentMinute = today.getMinutes();
    const currentSecond = today.getSeconds();
    
    hour.textContent = currentHour + ': ';
    minute.textContent = currentMinute + ': ';
    second.textContent = currentSecond;
    
    duration.textContent = 'PM '

    if( parseInt(hour.textContent) > 12 ) {
        currentHour -= 12;
        hour.textContent = currentHour + ': ';
        duration.textContent = ' AM';
    }

    // zero padded.

    if( hour.textContent.length <= 3 ) {
        hour.textContent = '0' + currentHour + ':';
    }

    if( minute.textContent.length <= 3 ) {
        minute.textContent = '0' + currentMinute + ':';
    }

    if( second.textContent.length < 2 ) {
        second.textContent = '0' + currentSecond;
    } 

}

setInterval( clock, 100 );

const date__txt = document.querySelector('.date__txt');

// render date function.
function renderDate() {

   const today = new Date();
   
   let thisDay = today.getDay();
   const thisDate = today.getDate();
   const thisMonth = today.getMonth();
   const thisYear = today.getFullYear();

   const dateFrag = new DocumentFragment();

   const date = document.createElement('span');
   const dateTextNode = document.createTextNode(`${thisDate} / `);
   date.append(dateTextNode);

   // month array.
   const months = [ 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december' ];

   const month = document.createElement('span');
   const monthTextNode = document.createTextNode(`${months[thisMonth]} / `);
   month.append(monthTextNode);

   const year = document.createElement('span');
   const yearTextNode = document.createTextNode(`${thisYear}.`)
   year.append(yearTextNode);


   const day = document.createElement('span');
   const dayTextNode = document.createTextNode(thisDay)
   day.append(dayTextNode);

   // append date to dateFrag.
   dateFrag.append(date);
   dateFrag.append(month);
   dateFrag.append(year);

   date__txt.appendChild(dateFrag);

}

// render date.
renderDate();

// retrive clock function when DOMContentLoaded.
window.addEventListener( 'DOMContentLoaded', clock );


