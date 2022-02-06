export function truncate(data, value) {
    if (data) {
        var word = data.split(" ").splice(0, value)
        return word.length < value ? data : word.join(" ") + '...'
    }
}
