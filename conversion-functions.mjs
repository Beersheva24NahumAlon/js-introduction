const zeroCode = "0".charCodeAt(0);
const nineCode = "9".charCodeAt(0);
const aCode = "a".charCodeAt(0);
const ASCII_START = 32;
const ASCII_FINISH = 126;
const RANGE = ASCII_FINISH - ASCII_START + 1;

export function myParseInt(strNum, radix) {
    let res = NaN;
    let actualRadix = getActualRadix(radix);
    if (strNum != null && strNum != undefined && !isNaN(actualRadix)) {
        let i = 0;
        let sign = 1;
        strNum = strNum.toString();
        strNum = strNum.trim();
        ({ sign, i } = signProcessing(strNum, sign, i));
        res = digitsProcessing(i, strNum, res, sign, actualRadix);
    }
    return res;
}

function getActualRadix(radix) {
    let res = NaN;
    if (radix == undefined) {
        res = 10;
    } else if (radix >= 2 && radix <= 36) {
        res = radix;
    }
    return res;
}

function digitsProcessing(i, strNum, res, sign, radix) {
    if (i < strNum.length && !isNaN(getDigit(strNum[i], radix))) {
        res = 0;
        let running = true;
        while (i < strNum.length && running) {
            let digit = getDigit(strNum[i], radix);
            if (isNaN(digit)) {
                running = false;
            } else {
                res = res * radix + digit;
                i++;
            }
        }
        res *= sign;
    }
    return res;
}

function signProcessing(strNum, sign, i) {
    if (strNum[0] == "-") {
        sign = -1;
        i++;
    } else if (strNum[0] == "+") {
        i++;
    }
    return { sign, i };
}

function getDigit(digitStr, radix) {
    digitStr = digitStr.toLowerCase();
    const code = digitStr.charCodeAt(0);
    const base = code > nineCode ? aCode - 10 : zeroCode;
    const res = code - base;
    return res >= 0 && res < radix ? res : NaN;
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

function stringShiftUnshift(str, shift, sign) {
    let res = str;
    const actualShift = getActualShift(shift);
    if (str != undefined && actualShift) {
        str = str.toString();
        res = "";
        for (let i = 0; i < str.length; i++) {
            res += shiftCharacter(str[i], actualShift * sign); 
        }
    }
    return res;
}

export function stringShift(str, shift) {
    return stringShiftUnshift(str, shift, 1);
}

export function stringUnshift(str, shift) {
    return stringShiftUnshift(str, shift, -1);
}

function getActualShift(shift) {
    const res = parseInt(shift);
    return isNaN(res) || res < 0 ? 0 : res % RANGE;
}

function shiftCharacter(char, shift) {
    let newCode = char.charCodeAt() + shift;
    if (newCode < ASCII_START || newCode > ASCII_FINISH) {
        const sign = shift / Math.abs(shift);
        newCode += RANGE * sign;
    }
    return String.fromCharCode(newCode);
}



