import platform from './platform';
import {i18n, t} from './translations';
import api from './api';
import {
    signInValidationSchema,
    signUpValidationSchema,
    myProfileValidationSchema,
    queryValidationSchema,
    bookingValidationSchema,
} from './validator';
import {signIn, callNumber, errorHandler} from './helpers';

export {
    platform,
    i18n,
    t,
    api,
    signInValidationSchema,
    signUpValidationSchema,
    myProfileValidationSchema,
    queryValidationSchema,
    bookingValidationSchema,
    signIn,
    callNumber,
    errorHandler,
};
