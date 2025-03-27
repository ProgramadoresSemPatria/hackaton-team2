import { PropsInput } from "../../types/PropsInput"

export default function SmallInputPassword({ placeholder, requiredInput = true, type }: PropsInput) {
    return (
        <input type={type}
                placeholder={placeholder} 
                required={requiredInput}
                className="w-full bg-bg-input rounded-lg p-4 outline-none placeholder-place-color text-zinc-200" />
    )
}