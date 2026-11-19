import urllib.request
from bs4 import BeautifulSoup
import re

url = 'https://www.futureblackfemale.com/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, timeout=15) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')

# Let's inspect each main section / container in body
# Find main containers or sections
print("=== TITLES & HEADINGS ===")
for tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
    for el in soup.find_all(tag):
        text = ' '.join(el.get_text().split())
        if text:
            print(f"<{tag}> {text}")

print("\n=== BUTTONS & LINKS ===")
for el in soup.find_all(['button', 'a']):
    text = ' '.join(el.get_text().split())
    href = el.get('href', '')
    if text and len(text) < 40:
        print(f"[{el.name}] '{text}' -> {href}")
