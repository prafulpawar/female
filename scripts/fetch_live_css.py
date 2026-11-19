import urllib.request
import re
from bs4 import BeautifulSoup

url = 'https://www.futureblackfemale.com/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, timeout=15) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

soup = BeautifulSoup(html, 'html.parser')

# Find all <style> blocks and CSS link tags
styles = soup.find_all('style')
print(f"Found {len(styles)} style blocks.")

# Find CSS links
css_links = [l.get('href') for l in soup.find_all('link', rel='stylesheet')]
print(f"Found {len(css_links)} css links:")
for c in css_links[:10]:
    print(c)

# Search for color codes, font sizes, margins in the HTML and style blocks
all_css = '\n'.join([s.get_text() for s in styles])
print(f"Total inline css length: {len(all_css)}")

with open('scripts/live_site_css.txt', 'w', encoding='utf-8') as f:
    f.write(all_css)

print("Saved live_site_css.txt")
