# Linger / 余音

余音是一款 macOS 桌面歌词工具，让歌词随音乐显示在桌面上。  
Linger shows lyrics alongside your music on your Mac desktop.

[官网 / Website](https://linger-lyrics.pages.dev/) · [下载 / Download](https://github.com/LeiZiKang/linger/releases/latest/download/Linger.dmg) · [问题反馈 / Report an issue](https://github.com/LeiZiKang/linger/issues)

## 系统与播放器 / Requirements and players

需要 macOS 14 或更高版本，支持 Apple 芯片和 Intel Mac。支持网易云音乐、Spotify 和 Apple Music；Spotify 和 Apple Music 的授权流程仍在验证中。

Requires macOS 14 or later, on Apple silicon or Intel. Supports NetEase Cloud Music, Spotify, and Apple Music. The authorization flows for Spotify and Apple Music are still being validated.

## 功能 / Features

- 桌面同步歌词；来源提供逐字时间轴时支持逐字高亮和翻译。 / Synced desktop lyrics, with word highlighting and translations when available from the source.
- 随封面变化的背景色，XDR 屏幕 HDR 高亮。 / Album-inspired colors and HDR highlights on XDR displays.
- 拖动、缩放、桌面层或置顶显示、锁定后点击穿透。 / Move and resize the widget, keep it at desktop level or on top, and lock it for click-through.
- 每首歌单独保存时间偏移，手动搜索和更换歌词。 / Per-track timing offsets, with manual lyrics search and selection.
- 本地歌词缓存、开机启动和自动更新。 / Local lyrics cache, launch at login, and automatic updates.

## 安装 / Installation

打开 DMG，把 Linger 拖进“应用程序”文件夹，然后打开 App。开机启动需要 App 位于“应用程序”文件夹。

Open the DMG, drag Linger into Applications, then open the app. Launch at login requires the app to be in Applications.

## 隐私 / Privacy

不需要账号。“共享匿名使用统计”默认开启：检查更新时会附带一个随机 ID 及 App 和 macOS 版本号，用来统计活跃用户，不保存 IP 地址，可在设置 › 通用中关闭（关闭后会删除这个 ID）。查询歌词时，会把当前歌曲的歌名、歌手、专辑和时长发给第三方歌词源 LRCLIB 和网易云音乐，具体字段随查询接口而异。歌词会缓存在本机，可在设置中清除。

No account is required. “Share anonymous usage stats” is on by default: update checks send a random ID plus the app and macOS version so we can count active users. IP addresses are not stored; turn it off in Settings › General (which also deletes the ID). Lyrics lookups send the current song title, artist, album, and duration to third-party sources LRCLIB and NetEase Cloud Music; the exact fields vary by endpoint. Lyrics are cached locally and can be cleared in settings.

## 关于此仓库 / About this repository

此公开仓库只放官网和安装包，不包含 App 源码。歌词由第三方提供，可能缺失或不准确；遇到问题请通过上方反馈链接说明 macOS 版本、播放器和复现步骤，勿提交私人信息或歌词全文。

This public repository contains only the website and installation packages, without the app source code. Third-party lyrics may be missing or inaccurate. For issues, use the link above and include your macOS version, player, and reproduction steps. Please omit private information and full lyrics.

Linger 是独立开发的工具，与 Apple、Spotify、网易云音乐没有关联。相关商标归各自所有者所有。

Linger is an independent tool and is not affiliated with Apple, Spotify, or NetEase Cloud Music. All trademarks belong to their respective owners.
