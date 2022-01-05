export function truncate(data, value) {
    if (data) {
        var word = data.split(" ").splice(0, value + 1)
        return word.length < value ? data : word.join(" ") + '...'
    }
}