import { HIGHT_TO_LOW_PRICE, LATEST, LOW_TO_HIGHT_PRICE } from "@/constant";

export const SORTED_OPTION = [
    { label: "Latest Products", value: LATEST },
    { label: "High to Low Price", value: HIGHT_TO_LOW_PRICE },
    { label: "Low to High Price", value: LOW_TO_HIGHT_PRICE },
] as const;

export type SortedOptionArray = typeof SORTED_OPTION;
export type SortedOption = typeof SORTED_OPTION[number];

