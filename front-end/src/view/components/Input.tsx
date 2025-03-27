import { PropsInput } from "../../types/PropsInput"

export default function Input({ placeholder, requiredInput = true, type }: PropsInput) {
    return (
        <input type={type}
                placeholder={placeholder}
                required={requiredInput}
                className="p-4 bg-bg-input placeholder-place-color rounded-lg text-zinc-200 outline-none my-2 w-full"
                />
    )
}