export function myParseInt(strNum) {
    let res = NaN;
    if (strNum != null && strNum != undefined) {
        let i = 0;
        let sign = 1;
        strNum = strNum.toString();
        strNum = strNum.trim();
        if (strNum[0] == "-") {
            sign = -1;
            i++;
        } else if (strNum[0] == "+") {
            i++;
        }
        if (i < strNum.length && !isNaN(getDigit(strNum[i]))) {
            res = 0;
            let running = true;
            while (i < strNum.length && running) {
                let digit = getDigit(strNum[i]);
                if (isNaN(digit)) {
                    running = false;
                } else {
                    res = res * 10 + digit
                    i++;
                }
            }
            res *= sign;
        }
    }
    return res;
}

function getDigit(digitStr) {
    return digitStr >= "0" && digitStr <= "9" ? +digitStr : NaN
}

export function myToStringFromIntNumber(number) {
    let res = "";
    let sign = "";
    const digits = "0123456789";
    if (number != null && number != undefined) {
        number = myParseInt(number);
        if (number < 0) {
            number *= -1;
            sign = "-";
        }
        while (number > 0) {
            res = digits[number % 10] + res;
            number = Math.trunc(number / 10);
        }
        res = sign + res;
    }
    return res;
}

