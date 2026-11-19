import urllib.request
from bs4 import BeautifulSoup
import re

url = 'https://www.futureblackfemale.com/'
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, timeout=15) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')

# Let's inspect the sections on the page
# Wix structure usually has sections with IDs or data-testid or custom tags
sections = soup.find_all(['section', 'div'], attrs={'data-testid': re.compile(r'richTextElement|strip|container|section', re.I)})
print(f"Found {len(sections)} testid containers.")

# Let's inspect the text and images inside each top-level block
blocks = soup.find_all(['section', 'div'], id=re.compile(r'comp-|comp_'))
print(f"Found {len(blocks)} comp blocks.")

# Let's print out the text hierarchy and associated images in order of appearance
for i, el in enumerate(soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'])):
    t = ' '.join(el.get_text().split())
    if t and len(t) > 3:
        # Check nearby img
        parent = el.parent
        img = parent.find('img') if parent else None
        img_src = img.get('src') if img else ''
        print(f"[{el.name}] {t[:80]} {'(IMG: ' + img_src[-30:] + ')' if img_src else ''}")
