import urllib.request
from bs4 import BeautifulSoup
import json

url = 'https://www.futureblackfemale.com/'
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, timeout=12) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')

# Find all images with their src and parent context
images = []
for img in soup.find_all('img'):
    src = img.get('src') or img.get('data-src') or ''
    alt = img.get('alt', '')
    if 'wixstatic' in src:
        images.append({'src': src, 'alt': alt})

print(f"Total wix images on homepage: {len(images)}")
for im in images:
    print(im)
