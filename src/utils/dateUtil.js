export const formatDate = (date) => {
    if (!date) return "";

    return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
    });
};