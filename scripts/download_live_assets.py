import os
import urllib.request
import re

os.makedirs('public/images/live_site', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
}

raw_urls = [
    ('header_logo.png', 'https://static.wixstatic.com/media/cdd2bd_98bb2d38e12d47039f29d47edb6f9aa1~mv2.png'),
    ('hero_darina.jpg', 'https://static.wixstatic.com/media/cdd2bd_b6ec5a79ed5447e282a617929374719a~mv2.jpg'),
    ('about_two_women.jpg', 'https://static.wixstatic.com/media/cdd2bd_cdf85b37e1cf4841abb2a3b9052ec547~mv2.jpg'),
    ('pillar_mental_health.jpg', 'https://static.wixstatic.com/media/cdd2bd_b5fa38d06c5643a6adcc64431d301621~mv2.jpg'),
    ('pillar_financial.jpg', 'https://static.wixstatic.com/media/cdd2bd_88e99fed4e634a16bbf75ca7600549ee~mv2.jpg'),
    ('pillar_career.jpg', 'https://static.wixstatic.com/media/cdd2bd_43788e63c40343729d2113067a1fd2e7~mv2.jpg'),
    ('step_1.png', 'https://static.wixstatic.com/media/cdd2bd_9d564ba86ad04f2482be5902e8265cb9~mv2.png'),
    ('step_2.png', 'https://static.wixstatic.com/media/cdd2bd_e7e896c57370436f8dced4d0c76e5aa6~mv2.png'),
    ('step_3.png', 'https://static.wixstatic.com/media/cdd2bd_7a32e34eebb94c7f9105e285cdc26a52~mv2.png'),
    ('funder_cwf.png', 'https://static.wixstatic.com/media/cdd2bd_6445fad5f7bb4b7885377d5e4a6b3982~mv2.png'),
    ('funder_ncf.png', 'https://static.wixstatic.com/media/cdd2bd_f20a35d7588e429a917911ed93760800~mv2.png'),
    ('funder_wage.png', 'https://static.wixstatic.com/media/cdd2bd_40666318d9b547a3ad754cf237f390e7~mv2.png'),
    ('intern_nappy.jpg', 'https://static.wixstatic.com/media/cdd2bd_453a82caa8144966b1298c57495fe1f7~mv2.jpg'),
    ('intern_bestbe.jpg', 'https://static.wixstatic.com/media/cdd2bd_7ace4805b16e4a2b97ba16212a4b64bf~mv2.jpg'),
    ('footer_logo.png', 'https://static.wixstatic.com/media/cdd2bd_6a75c3f863b9421581cb7a004a22ac7e~mv2.png')
]

for filename, url in raw_urls:
    dest = os.path.join('public/images/live_site', filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(dest, 'wb') as f:
                f.write(data)
            print(f"Downloaded {filename} ({len(data)} bytes)")
    except Exception as e:
        print(f"Failed {filename}: {e}")

print("Live site assets ready.")
