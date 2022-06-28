import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4opzm1i0rtq01xs9z0d5m4b/master',
    cache: new InMemoryCache()
})