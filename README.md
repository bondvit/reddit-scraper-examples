# Reddit Scraper — examples

Runnable examples for the **[Reddit Scraper — Posts & Comments | from $1.50/1K](https://apify.com/bovi/reddit-scraper)** on Apify.

Scrape Reddit posts, comments, and user activity from any public subreddit. Returns 25+ fields: score, upvote ratio, flair, author, timestamps, parse_confidence. No API key needed — backed by Arctic Shift archive with unlimited historical depth. MCP-callable.

## What you get per record
`author` · `body` · `created_utc` · `depth` · `domain` · `flair_text` · `id` · `is_self` · `is_submitter` · `link_id` · `num_comments` · `over_18` · `parent_id` · `parse_confidence` · `permalink` · `score` · `scraped_at` · `spoiler` · `stickied` · `subreddit` · `subreddit_subscribers` · `title` · `type` · `upvote_ratio` · `url` · `warnings`

## Who uses this
- **Social listening** — track brand/keyword mentions across subreddits in near-real-time.
- **Trend & demand research** — what communities are asking for before it hits the mainstream.
- **Content & lead sourcing** — find threads where your product is the answer.

## Quickstart
1. Get your Apify token: <https://console.apify.com/account/integrations>
2. Run a language example below. Both call the actor and print the results.

| Example | File |
|---|---|
| Python (`apify-client`) | [`examples/python/run.py`](examples/python/run.py) |
| JavaScript (`apify-client`) | [`examples/javascript/run.js`](examples/javascript/run.js) |
| Sample output (real records) | [`examples/sample_output.json`](examples/sample_output.json) |

## Example input
```json
{
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
}
```

## Links
- **Actor on Apify Store:** <https://apify.com/bovi/reddit-scraper>
- **Apify client docs:** [Python](https://docs.apify.com/api/client/python/) · [JavaScript](https://docs.apify.com/api/client/js/)

---
_MIT-licensed examples. The actor runs on the caller's Apify account (you pay platform compute + per-result)._
