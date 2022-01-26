function removeAscent(str) {
    if (str === null || str === undefined) return str
    str = str.toLowerCase()
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    str = str.replace(/đ/g, 'd')
    return str
}

// phone number
$.validator.addMethod(
    'isPhoneNumber',
    (value, element) => {
        const phoneRegex =
            /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im
        return phoneRegex.test(value)
    },
    'Please enter a valid phone number'
)

// name
$.validator.addMethod(
    'isName',
    (value, element) => {
        const nameRegex =
            /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/g
        return nameRegex.test(removeAscent(value))
    },
    'Please enter exactly your name'
)

// password

$.validator.addMethod(
    'isPassword',
    (value, element) => {
        const pwdRegex =
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/
        return pwdRegex.test(value)
    },
    'The strong password is a password  8 to 32 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
)
