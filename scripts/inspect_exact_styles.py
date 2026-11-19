import urllib.request
from bs4 import BeautifulSoup
import re

url = 'https://www.futureblackfemale.com/'
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, timeout=15) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')

# Find all text nodes and their computed or inline styles, classes, fonts
for tag in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']):
    text = tag.get_text().strip()
    style = tag.get('style', '')
    parent_style = tag.parent.get('style', '') if tag.parent else ''
    if any(keyword in text for keyword in ['Privileging', 'Future Black Female Pillars', 'The well-being', 'Our Funders', 'FROM OUR INTERNS', 'Future Black Trailblazers']):
        print(f"<{tag.name}> TEXT: {text[:60]}")
        print(f"  TAG STYLE: {style}")
        print(f"  PARENT STYLE: {parent_style[:100]}")
        print(f"  CLASSES: {tag.get('class')}")
        print("---")
