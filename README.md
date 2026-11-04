# Linger

**English** · [简体中文](README.zh-CN.md)

Linger shows lyrics alongside your music on your Mac desktop.

[Website](https://linger-lyrics.pages.dev/) · [Download](https://github.com/LeiZiKang/linger/releases/latest/download/Linger.dmg) · [Report an issue](https://github.com/LeiZiKang/linger/issues)

## Requirements and players

Requires macOS 14 or later, on Apple silicon or Intel. Supports NetEase Cloud Music, Spotify, and Apple Music. The authorization flows for Spotify and Apple Music are still being validated.

## Features

- Synced desktop lyrics, with word highlighting and translations when available from the source.
- Album-inspired colors and HDR highlights on XDR displays.
- Move and resize the widget, keep it at desktop level or on top, and lock it for click-through.
- Per-track timing offsets, with manual lyrics search and selection.
- Local lyrics cache, launch at login, and automatic updates.

## Installation

Open the DMG, drag Linger into Applications, then open the app. Launch at login requires the app to be in Applications.

## Privacy

No account is required. “Share anonymous usage stats” is on by default: update checks send a random ID plus the app and macOS version so we can count active users. IP addresses are not stored; turn it off in Settings › General (which also deletes the ID). Lyrics lookups send the current song title, artist, album, and duration to third-party sources LRCLIB and NetEase Cloud Music; the exact fields vary by endpoint. Lyrics are cached locally and can be cleared in settings.

## About this repository

This public repository contains only the website and installation packages, without the app source code. Third-party lyrics may be missing or inaccurate. For issues, use the link above and include your macOS version, player, and reproduction steps. Please omit private information and full lyrics.

Linger is an independent tool and is not affiliated with Apple, Spotify, or NetEase Cloud Music. All trademarks belong to their respective owners.
