interface AuthLinkProps {
    path: string
    linkText: string
}

export const AuthLink = ({ path, linkText }: AuthLinkProps) => {
    return (
        <a href={path}>{linkText}</a>        
    )
}