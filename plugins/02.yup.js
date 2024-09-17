import { pt } from 'yup-locale-pt';
import { setLocale } from 'yup';

export default defineNuxtPlugin(() => {
    setLocale(pt)
})
