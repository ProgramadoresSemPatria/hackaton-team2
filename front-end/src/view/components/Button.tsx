import { ArrowRight, PencilSimple } from 'phosphor-react'
import { PropsButton } from '../../types/PropsButton'

export default function Button({ name, icon }: PropsButton) {
    return (
        <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-color hover:bg-primary-color-hover transition-colors duration-150 ease-linear text-color-font font-inter py-3 px-12 rounded-lg cursor-pointer" >{name} 
        {icon === "register" || icon === "login" ? <ArrowRight /> : icon === "edit" ? <PencilSimple /> : '' } </button>
    )
}