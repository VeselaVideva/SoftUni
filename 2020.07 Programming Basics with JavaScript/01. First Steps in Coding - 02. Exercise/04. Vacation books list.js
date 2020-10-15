function bookList(arg1, arg2, arg3) {
    let pagesInBook = Number(arg1);
    let pagesPerHour = Number(arg2);
    let days = Number(arg3);

    let readTimePerBook = pagesInBook / pagesPerHour;
    let hoursPerDay = readTimePerBook / days;

    console.log(hoursPerDay);
}

bookList("432", "15", "4");