import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc'
import ptBR from 'dayjs/locale/pt-br'

dayjs.extend(utc)
dayjs.extend(duration)
dayjs.locale(ptBR)

export default defineNuxtPlugin(() => ({
    provide: {
        dayjs
    }
}))
