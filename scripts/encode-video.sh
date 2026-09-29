#!/usr/bin/env bash
# Encode a video for the web and create poster frames.
# Usage: scripts/encode-video.sh <input.mp4> <slug> [width] [poster-second]
#   width: 720 for portrait reels, 1280 for landscape (default 1280)
# Output: public/media/video/<slug>.mp4, <slug>.webm, <slug>-poster.jpg, <slug>-poster.webp
set -euo pipefail
IN="$1"; SLUG="$2"; W="${3:-1280}"; T="${4:-1}"
OUT="$(dirname "$0")/../public/media/video"; mkdir -p "$OUT"
ffmpeg -y -i "$IN" -vf "scale=${W}:-2:flags=lanczos" -c:v libx264 -profile:v high -preset slow -crf 26 \
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k -ac 2 "$OUT/$SLUG.mp4"
ffmpeg -y -i "$IN" -vf "scale=${W}:-2:flags=lanczos" -c:v libvpx-vp9 -b:v 0 -crf 38 -row-mt 1 -c:a libopus -b:a 80k "$OUT/$SLUG.webm"
ffmpeg -y -ss "$T" -i "$IN" -frames:v 1 -vf "scale=${W}:-2:flags=lanczos" -q:v 3 "$OUT/$SLUG-poster.jpg"
ffmpeg -y -ss "$T" -i "$IN" -frames:v 1 -vf "scale=${W}:-2:flags=lanczos" -c:v libwebp -quality 78 "$OUT/$SLUG-poster.webp"
ls -lh "$OUT/$SLUG"*
