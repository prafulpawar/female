import urllib.request
import urllib.parse
import re
import os
import json
from html.parser import HTMLParser

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
}

PAGES = [
    'https://www.futureblackfemale.com/',
    'https://www.futureblackfemale.com/about',
    'https://www.futureblackfemale.com/our-team',
    'https://www.futureblackfemale.com/programs',
    'https://www.futureblackfemale.com/events',
    'https://www.futureblackfemale.com/donate',
    'https://www.futureblackfemale.com/research-hub',
    'https://www.futureblackfemale.com/vacancies',
    'https://www.futureblackfemale.com/contact',
    'https://www.futureblackfemale.com/blog'
]

img_urls = set()

for url in PAGES:
    try:
        print(f"Fetching {url}...")
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Extract wix static image urls
            # Pattern like https://static.wixstatic.com/media/([a-zA-Z0-9_~]+)\.(jpg|jpeg|png|webp|svg)
            # or in src="..."
            matches = re.findall(r'https?://static\.wixstatic\.com/media/[a-zA-Z0-9_\~]+(?:\.(?:jpg|jpeg|png|webp|svg|gif)|(?=/))', html, re.IGNORECASE)
            for m in matches:
                img_urls.add(m)
            
            # also standard img tags
            tag_matches = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.IGNORECASE)
            for tm in tag_matches:
                if tm.startswith('http'):
                    img_urls.add(tm)
    except Exception as e:
        print(f"Error fetching {url}: {e}")

print(f"Found {len(img_urls)} raw image URLs.")
with open('crawled_urls.json', 'w', encoding='utf-8') as f:
    json.dump(list(img_urls), f, indent=2)
