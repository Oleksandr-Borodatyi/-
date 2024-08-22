const Validator = {

    validateEmail: (email) => {
        let regExp = /^[a-zA-Z0-9][a-zA-Z0-9-.+]{1,19}@[\w.!$%&’*+/=?^-]{1,15}(\.[a-z]{1,5}){1,}$/;
        return regExp.test(email);
    },

    validatePhone: (phone) => {
        let regExp = /^(\+\d{0,2})?[ -]*([\d -]{3,}?|\([\d -]{3,}\))[\d -]*$/;

        if (phone.length > 25) return false;

        let cleanedPhoneNumber = phone.includes("+")
            ? phone.split(" ").slice(1).join(" ")
            : phone;
            cleanedPhoneNumber = cleanedPhoneNumber
            .split("")
            .filter((i) => i !== " " && !isNaN(i))
            .join("");

        if (cleanedPhoneNumber.length > 10) return false;

        return regExp.test(phone);
        
    },

    validatePassword: (password) => {
        const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
        return regExp.test(password);
    },

}