import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/pt_BR.json';

extend('required', {
    ...required,
    message: messages.required,
});

extend('email', {
    ...email,
    message: messages.email,
});
