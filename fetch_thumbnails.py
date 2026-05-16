import urllib.request
import json
import os

# The two new viral videos that need thumbnails
new_videos = [
    ("https://vt.tiktok.com/ZSxNJ8VNH/", "thumbnails/thumb_new_1.jpg"),
    ("https://vt.tiktok.com/ZSxN1ojmp/", "thumbnails/thumb_new_2.jpg"),
    ("https://vt.tiktok.com/ZSxNF3poH/", "thumbnails/thumb_new_3.jpg")
]

def fetch_thumbnails():
    print("Fetching thumbnails from TikTok...")
    for url, save_path in new_videos:
        oembed_url = f"https://www.tiktok.com/oembed?url={url}"
        try:
            req = urllib.request.Request(oembed_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                data = json.loads(response.read().decode('utf-8'))
                thumb_url = data.get("thumbnail_url")
                
                if thumb_url:
                    print(f"Downloading thumbnail for {url}...")
                    # Download the image
                    img_req = urllib.request.Request(thumb_url, headers={'User-Agent': 'Mozilla/5.0'})
                    with urllib.request.urlopen(img_req) as img_response, open(save_path, 'wb') as out_file:
                        out_file.write(img_response.read())
                    print(f"Successfully saved to {save_path}!")
                else:
                    print(f"No thumbnail found in oEmbed data for {url}")
        except Exception as e:
            print(f"Error fetching thumbnail for {url}: {e}")

if __name__ == "__main__":
    # Ensure thumbnails directory exists
    os.makedirs("thumbnails", exist_ok=True)
    fetch_thumbnails()
    print("All done!")
