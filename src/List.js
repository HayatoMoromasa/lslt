const Languages = [
    'javascript',
    'go',
    'php',
    'typescript',
    'ruby'
]

export const List = () => {
    return (
        <div>
            {
                Languages.map((lang,index) => {
                    return <p key={index}>{lang}</p>
                })
            }
        </div>
    )
}

