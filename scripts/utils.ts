import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const specialtyColors = {
    pwn: 'rose',
    fullpwn: 'red',
    reverse: 'orange',
    crypto: 'yellow',
    forensics: 'emerald',
    blockchain: 'cyan',
    web: 'sky',
    misc: 'fuchsia',
    osint: 'gray',
}
