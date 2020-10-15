function birthdayParty(arg) {
    let rent = Number(arg);
    let cake = rent * 0.2;
    let drinks = cake * 0.55;
    let animator = rent / 3;

    let budget = rent + cake + drinks + animator;
    console.log(budget);
}

birthdayParty("3720");