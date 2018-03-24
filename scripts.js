function interactive_alert (name, age) {
    if (age > 100) {
        alert('아주 장수하시네요!');
    } else if (age > 50) {
        alert('어르신!');
    } else if (age > 40) {
        alert('40대');
    } else if (age > 30) {
        alert('30대');
    } else if (age > 20) {
        alert('20대');
    } else if (age > 10) {
        alert('10대');
    } else {
        alert('유소년');
    }
    
    switch (name) {
        case '박순영' :
            alert('주인님!');
            break;
            
        case '홍길동' :
            alert('길동아!');
            break;
            
        default:
            alert(name);
            break;
    }
}

function addToFour(x) {
    x = x * 4;
    return x + 4;
}