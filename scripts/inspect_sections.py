import urllib.request
from bs4 import BeautifulSoup
import json

url = 'https://www.futureblackfemale.com/'
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, timeout=15) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')

# Let's inspect the exact layout flow from header to footer
strips = soup.find_all('section')
print(f"Total HTML5 <section> tags: {len(strips)}")
for i, s in enumerate(strips):
    t = ' '.join(s.get_text().split())
    imgs = [img.get('src', '')[-35:] for img in s.find_all('img') if img.get('src')]
    print(f"--- Section {i} ---")
    print("Text:", t[:150])
    print("Images:", imgs)
