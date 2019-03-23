export function formatPercentage(value, total){
    return `${((value / total) * 100).toFixed(2)} %`
}