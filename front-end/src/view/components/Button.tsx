import { ArrowRight } from 'phosphor-react'

interface ButtonProps {
    name: string
}

export default function Button({ name }: ButtonProps) {
    return (
        <>
            <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-color hover:bg-primary-color-houver transition-colors duration-150 ease-linear text-color-font font-inter py-3 px-12 rounded-lg cursor-pointer" >{name} <ArrowRight /></button>
        </>
    )
}