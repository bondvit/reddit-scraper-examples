/**
 * reddit-scraper — JavaScript example.
 *
 *   npm install apify-client
 *   export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
 *   node run.js
 *
 * Docs: https://apify.com/bovi/reddit-scraper
 */
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const input = {
    "subreddits": [
        "python"
    ],
    "maxItems": 100,
    "sort": "new",
    "includeComments": false,
    "maxCommentsPerPost": 50,
    "proxyConfiguration": {
        "useApifyProxy": false
    }
};

const run = await client.actor('bovi/reddit-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item);
