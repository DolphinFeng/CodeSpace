export function useNumberFormat(number: number): string | number {


    if (number > 100000000) {
        return Number((number / 100000000).toFixed(1)) + ' 亿';
    }

    if (number > 10000000) {
        return Number((number / 10000000).toFixed(1)) + ' 千万';
    }

    if (number > 10000) {
        return Number((number / 10000).toFixed(1)) + ' 万';
    }

    return number;
}
