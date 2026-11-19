import urllib.request
import re

url = 'https://www.futureblackfemale.com/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, timeout=12) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Hex colors
colors = set(re.findall(r'#(?:[0-9a-fA-F]{3,8})\b', html))
print('Total colors:', len(colors))
# Filter prominent colors
print('Sample colors:', list(colors)[:30])

# Look for specific css variables or themes
theme_matches = re.findall(r'--(?:color|theme|font)[^:]*:[^;]+;', html)
print('Theme variables:', theme_matches[:20])

# Look for typography
fonts = set(re.findall(r'font-family:[^;\"}]+', html))
print('Fonts:', list(fonts)[:10])

# Look for site logo
logos = [m for m in re.findall(r'https?://static\.wixstatic\.com/media/[^"\'\s)]+', html) if 'logo' in m.lower()]
print('Logos:', logos)
