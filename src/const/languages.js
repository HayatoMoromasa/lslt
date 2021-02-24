export const Languages = [
    'javascript',
    'go',
    'php',
    'typescript',
    'ruby'
]

export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Languages);
        }, 1000);
    })
}
