import { Loader } from '@/vendor/Interfaces'

export default function PreLoader({ title } : Loader) {
    return document.title = title
}