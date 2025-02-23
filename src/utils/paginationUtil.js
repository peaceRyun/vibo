export const paginationUtil = (items, page = 1, itemsPerPage = 20) => {
    const start = 0;
    const end = page * itemsPerPage;
    const slicedItems = items.slice(start, end);
    const hasMore = items.length > end;

    return {
        items: slicedItems,
        hasMore,
        totalItems: items.length,
    };
};
