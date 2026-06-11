"""
reddit-scraper — Python example.

    pip install apify-client
    export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
    python run.py

Docs: https://apify.com/bovi/reddit-scraper
"""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run_input = {   'subreddits': ['python'],
    'maxItems': 100,
    'sort': 'new',
    'includeComments': False,
    'maxCommentsPerPost': 50,
    'proxyConfiguration': {'useApifyProxy': False}}

run = client.actor("bovi/reddit-scraper").call(run_input=run_input)

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
