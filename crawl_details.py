import os
import urllib.request
import urllib.parse
import re
import json

os.makedirs('public/images', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
}

# Let's inspect pages specifically to get exact images for team, programs, events, etc.
pages = {
    'home': 'https://www.futureblackfemale.com/',
    'about': 'https://www.futureblackfemale.com/about',
    'team': 'https://www.futureblackfemale.com/our-team',
    'programs': 'https://www.futureblackfemale.com/programs',
    'events': 'https://www.futureblackfemale.com/events',
    'research': 'https://www.futureblackfemale.com/research-hub',
    'donate': 'https://www.futureblackfemale.com/donate',
    'blog': 'https://www.futureblackfemale.com/blog'
}

page_images = {}

for p_name, p_url in pages.items():
    try:
        req = urllib.request.Request(p_url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Extract image elements with alt/aria/title/filenames
            # Wix image structure often has <wow-image ... or <img ...
            # and wix static URLs
            found = []
            # Find all wixstatic media urls
            wix_matches = re.findall(r'https?://static\.wixstatic\.com/media/[^"\'\s)]+', html)
            for wm in wix_matches:
                # clean up query params or /v1/ thumbnail downscalers to get full original image
                m = re.match(r'(https?://static\.wixstatic\.com/media/[a-zA-Z0-9_\~]+(?:\.(?:jpg|jpeg|png|webp|svg|gif))?)', wm)
                if m:
                    clean = m.group(1)
                    if clean not in found:
                        found.append(clean)
            page_images[p_name] = found
            print(f"Page '{p_name}' has {len(found)} image assets.")
    except Exception as e:
        print(f"Error crawling {p_url}: {e}")

with open('public/images/crawled_summary.json', 'w', encoding='utf-8') as f:
    json.dump(page_images, f, indent=2)

print("Crawled summary saved.")
