export function getTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Adds one day

    const year = tomorrow.getFullYear();
    const month = (tomorrow.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = tomorrow.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}T00:00:00`;
}
