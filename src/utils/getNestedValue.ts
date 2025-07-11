function getNestedValue<T>(obj: T, path: string): unknown {
    return path.split(".").reduce((acc: unknown, key: string) => {
        if (typeof acc === "object" && acc !== null && key in acc) {
            return (acc as Record<string, unknown>)[key];
        }
        return undefined;
    }, obj);
}
export default getNestedValue