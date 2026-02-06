export function formatCurrency(
    value: number | string,
    options?: {
        locale?: string;
        currencySymbol?: string;
        useGrouping?: boolean;
    }
) {
    const number = Number(value);

    const formatted = new Intl.NumberFormat(options?.locale ?? 'en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
        useGrouping: options?.useGrouping ?? true,
    }).format(number);

    return options?.currencySymbol
        ? `${options.currencySymbol}${formatted}`
        : formatted;
}
