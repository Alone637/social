import { StyledInput } from "./AppInput.style"

interface IAppButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    errorText?: string
}

export const AppInput = ({type, placeholder, errorText, ...props}: IAppButtonProps) => {
    return (
        <>
        <StyledInput type={type} placeholder={placeholder} {...props}/>
        {errorText && <p>{errorText}</p>}
        </>
    )
}