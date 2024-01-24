export const formatDate = (date: Date) => [
    date.getHours().toString().padStart(2, '0'),
    date.getMinutes().toString().padStart(2, '0')
].join(':')
