import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
    emptyStringAsUndefined: true,
    client: {},
    experimental__runtimeEnv: {},
});
