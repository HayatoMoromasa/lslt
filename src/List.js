const Languages = [
    'javascript',
    'go',
    'php',
    'typescript',
    'ruby'
]

export const List = () => {
    return (
        <>
            {
                Languages.map((lang,index) => {
                    return <p key={index}>{lang}</p>
                })
            }
        </>
    )
}

