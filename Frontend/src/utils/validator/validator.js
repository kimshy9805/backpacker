import * as yup from 'yup';

// SignUp
const signUpValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
    contact_number: yup
        .string()
        .matches(/(\d){8}\b/, 'Enter a valid phone number')
        .required('Phone number is required'),
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        // .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        // .matches(/\d/, 'Password must have a number')
        // .matches(
        //     /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        //     'Password must have a special character',
        // )
        // .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
});

// MyProfile
const myProfileValidationSchema = yup.object().shape({
    phoneNumber: yup
        .string()
        .strict(true)
        .matches(/(\d){8}\b/, 'Enter a valid phone number. 12345678')
        .max(8, 'Phone number cannot exceed 8 char'),
    nickName: yup.string(),
});

// SignIn
const signInValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
});

// Setting Query
const queryValidationSchema = yup.object().shape({
    query: yup
        .string()
        .min(8, ({min}) => `Query must be at least ${min} characters`)
        .max(500, ({max}) => 'Maximum characters are 500')
        .required('Should not leave blank space'),
});

//Reservation
const bookingValidationSchema = yup.object().shape({});

export {
    signInValidationSchema,
    signUpValidationSchema,
    myProfileValidationSchema,
    queryValidationSchema,
    bookingValidationSchema,
};
