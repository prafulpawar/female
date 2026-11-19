import re
from collections import Counter

with open('scripts/live_site_css.txt', 'r', encoding='utf-8') as f:
    css = f.read()

# Find font-family
fonts = re.findall(r'font-family:\s*([^;!]+)', css)
font_counts = Counter([f.strip() for f in fonts])
print("=== TOP FONTS ===")
for font, count in font_counts.most_common(10):
    print(f"{count}x: {font}")

# Find colors (#hex and rgb/rgba)
hex_colors = re.findall(r'#(?:[0-9a-fA-F]{3,8})\b', css)
hex_counts = Counter([c.lower() for c in hex_colors])
print("\n=== TOP HEX COLORS ===")
for col, count in hex_counts.most_common(20):
    print(f"{count}x: {col}")

# Find button classes and button styling
btn_rules = re.findall(r'button[^{]*\{([^}]+)\}', css, re.I)
print(f"\nFound {len(btn_rules)} button rules:")
for r in btn_rules[:5]:
    print('BUTTON:', r.strip())

# Search for section backgrounds or strip backgrounds
bg_rules = re.findall(r'background(?:-color)?:\s*([^;!]+)', css)
bg_counts = Counter([b.strip() for b in bg_rules])
print("\n=== TOP BACKGROUNDS ===")
for bg, count in bg_counts.most_common(15):
    print(f"{count}x: {bg}")
