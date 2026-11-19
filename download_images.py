import os
import urllib.request
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

with open('public/images/crawled_summary.json', 'r', encoding='utf-8') as f:
    summary = json.load(f)

os.makedirs('public/images/downloaded', exist_ok=True)

download_map = {}
idx = 0

for category, urls in summary.items():
    download_map[category] = []
    for u in urls:
        idx += 1
        # determine extension
        ext = '.jpg'
        if '.png' in u.lower():
            ext = '.png'
        elif '.webp' in u.lower():
            ext = '.webp'
        elif '.svg' in u.lower():
            ext = '.svg'
        
        # generate a unique filename
        filename = f"{category}_{idx:02d}{ext}"
        filepath = os.path.join('public/images/downloaded', filename)
        
        try:
            req = urllib.request.Request(u, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as resp:
                content = resp.read()
                # filter out tiny tracking pixels or empty icons
                if len(content) > 1000: # at least 1KB
                    with open(filepath, 'wb') as img_out:
                        img_out.write(content)
                    download_map[category].append({
                        'original_url': u,
                        'local_path': f"/images/downloaded/{filename}",
                        'size': len(content)
                    })
                    print(f"Downloaded {filename} ({len(content)} bytes)")
        except Exception as e:
            print(f"Failed {u}: {e}")

with open('public/images/download_map.json', 'w', encoding='utf-8') as f:
    json.dump(download_map, f, indent=2)

print(f"Finished downloading images. Map saved to public/images/download_map.json")
