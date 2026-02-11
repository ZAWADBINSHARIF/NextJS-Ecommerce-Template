import api from "@/lib/axios";
import { SortedOption, SortedOptionArray } from "@/types/Sorted";

export const fetchAllAvailableProducts = async ({
    category_slug,
    page,
    perPage,
    sortedBy
}: {
    category_slug?: string;
    page: number;
    perPage: number;
    sortedBy: SortedOption;
}) => {

    const paginationParams = {
        page,
        perPage
    };

    const products = await api.get('/store-products', {
        params: category_slug ?
            {
                category_slug,
                ...paginationParams,
                sortBy: sortedBy.value
            } :
            {
                ...paginationParams,
                sortBy: sortedBy.value
            },
    });

    return products;
};

export const fetchAllCategories = async () => {
    const categories = await api.get('/categories');

    return categories;
};

export const fetchLatestProducts = async () => {
    const products = await api.get('/latest-products');

    return products;
};

export const fetchContacts = async () => {
    const contacts = await api.get('/store-contacts');

    return contacts;
};

export const fetchStoreProfile = async () => {
    const profile = await api.get('/store-profile');

    return profile;
};

export const fetchQuickLinks = async () => {
    const links = await api.get('/store-quick-links');

    return links;
};

export const fetchQuickLinkContent = async ({ url_slug }: { url_slug: string; }) => {
    const { data } = await api.get('/store-quick-link-content', {
        'params': { url_slug },
    });

    return data;
};

export const fetchProductDetails = async ({
    short_id,
    slug,
}: {
    short_id: string;
    slug: string;
}) => {
    const { data } = await api.get(
        `/product-details/${short_id}/${slug}`
    );

    return data;
};

export const fetchBanners = async () => {
    const { data } = await api.get('/store-banners');

    return data;
};
