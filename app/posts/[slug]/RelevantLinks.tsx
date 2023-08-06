
interface RelevantLinksProps {
    links: {
        href: string
        display: string
    }[]
}

export default function RelevantLinks({links}: RelevantLinksProps) {
    return <>
        {links.length !== 0 &&
            <>
                <span>Project related links: </span> 
                {links.map((link, i) => (
                    <span key={i}>
                        {i > 0 && ", "}
                        <a href={link.href}>{link.display}</a>
                    </span>
                ))}
            </>
        }
    </>
}