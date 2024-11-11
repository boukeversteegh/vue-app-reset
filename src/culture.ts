import {ref} from "vue"

export type Culture = 'nl' | 'en' | 'de' | 'fr' | 'es' | 'it'

export const availableCultures: Culture[] = [
    'nl',
    'en',
    'de',
    'fr',
    'es',
    'it'
]

export const selectedCulture = ref<Culture>('nl')
