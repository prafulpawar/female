import os
import glob

files = glob.glob('public/images/downloaded/*')
print(f"Downloaded files count: {len(files)}")

# Check key files
keys = [
    'Future-Black-Female',
    'Footer-Logo',
    'cwf_logo',
    'NCF',
    'WAGE',
    'darina',
    '1611432580340',
    'mwabonje',
    'EDuZBDQ',
    '380-felix',
    'nappy',
    'bestbe'
]

for k in keys:
    matches = [f for f in files if k.lower() in f.lower()]
    print(f"Key '{k}': {len(matches)} match(es) -> {matches[:1]}")
