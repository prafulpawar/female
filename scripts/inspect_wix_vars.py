import re

with open('scripts/live_site_css.txt', 'r', encoding='utf-8') as f:
    css = f.read()

# Find font definitions
font_defs = re.findall(r'(\.font_\d+[^\{]*\{[^\}]+\})', css)
for fd in font_defs[:15]:
    print(fd)

# Find color variables
color_defs = re.findall(r'(--color_\d+:[^;]+;)', css)
print("Color defs:", len(color_defs))
for cd in color_defs[:30]:
    print(cd)
