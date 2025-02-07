export const takeUniqueOrThrow = <T extends unknown[]>(
    values: T
): T[number] => {
    if (values.length !== 1)
        throw new Error("Found non unique or inexistent value");
    return values[0]!;
};
