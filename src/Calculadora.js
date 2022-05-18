

export default class Calculadora {

static soma(a,b){
    return a + b;
}

static sub(a,b){
    return a - b;
}

static multi(a,b){
    return a * b;
}

static div(a,b){
    return a /b;
}

static media(a,b,med,somamed){
    somamed = a+b;
    let mediatot = somamed/2;
    return mediatot;

}


}