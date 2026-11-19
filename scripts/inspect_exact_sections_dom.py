import urllib.request
from bs4 import BeautifulSoup
import re

url = 'https://www.futureblackfemale.com/'
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, timeout=15) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')

# Let's inspect sections in main
main = soup.find('main') or soup.find('div', id='SITE_PAGES') or soup.body
sections = main.find_all('section')

print(f"Main has {len(sections)} sections:")
for idx, sec in enumerate(sections):
    print(f"\n==================== SECTION {idx} ====================")
    # Check background style or images
    style = sec.get('style', '')
    print("SECTION STYLE:", style[:150])
    
    # Check all direct children or text blocks
    for h in sec.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']):
        print(f"  HEADING <{h.name}>: {h.get_text().strip()[:80]}")
    for p in sec.find_all('p'):
        print(f"  P: {p.get_text().strip()[:80]}")
    for a in sec.find_all('a'):
        print(f"  LINK: '{a.get_text().strip()}' -> {a.get('href')}")
    for img in sec.find_all('img'):
        print(f"  IMG: alt='{img.get('alt')}' src={img.get('src', '')[-40:]}")
