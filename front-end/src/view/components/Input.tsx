interface PropsInput {
    placeholder: string
}

export default function Input({ placeholder }: PropsInput) {
    return (
        <>
            <input type="text" 
                   placeholder={placeholder}
                   required
                   className="p-4 bg-bg-input placeholder-place-color rounded-lg text-zinc-200 outline-none my-2 w-full"
                   />
        </>
    )
}