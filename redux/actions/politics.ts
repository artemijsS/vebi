export const setPolitics = (politics: string) => ({
    type: 'POLITICS_SET',
    payload: politics
})

export const exitPolitics = () => ({
    type: 'POLITICS_EXIT',
})
