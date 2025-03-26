interface SmallInputPasswordProps {
    placeholder: string
}

export default function SmallInputPassword({ placeholder }: SmallInputPasswordProps) {
    return (
        <>
            <input type="password" 
                   placeholder={placeholder} 
                   required
                   className="w-full bg-bg-input rounded-lg p-4 outline-none placeholder-place-color text-zinc-200" />
        </>
    )
}