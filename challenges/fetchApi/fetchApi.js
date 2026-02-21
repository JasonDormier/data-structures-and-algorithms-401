'use strict';

async function getApi() {
    const url = 'https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000'
    //try {
        const response = await fetch(url);
        //console.log(response);
        const data = await response.json().data[0];
        console.log(data.data[0]);
    // } catch (error) {
    //     console.error('There was an error trying to get the data');
    // }
}

getApi();