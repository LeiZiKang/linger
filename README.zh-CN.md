# 余音 Linger

[English](README.md) · **简体中文**

余音是一款 macOS 桌面歌词工具，让歌词随音乐显示在桌面上。

[官网](https://linger-lyrics.pages.dev/) · [下载](https://github.com/LeiZiKang/linger/releases/latest/download/Linger.dmg) · [问题反馈](https://github.com/LeiZiKang/linger/issues)

## 系统与播放器

需要 macOS 14 或更高版本，支持 Apple 芯片和 Intel Mac。支持网易云音乐、Spotify 和 Apple Music；Spotify 和 Apple Music 的授权流程仍在验证中。

## 功能

- 桌面同步歌词；来源提供逐字时间轴时支持逐字高亮和翻译。
- 随封面变化的背景色，XDR 屏幕 HDR 高亮。
- 拖动、缩放、桌面层或置顶显示、锁定后点击穿透。
- 每首歌单独保存时间偏移，手动搜索和更换歌词。
- 本地歌词缓存、开机启动和自动更新。

## 安装

打开 DMG，把 Linger 拖进“应用程序”文件夹，然后打开 App。开机启动需要 App 位于“应用程序”文件夹。

## 隐私

不需要账号。“共享匿名使用统计”默认开启：检查更新时会附带一个随机 ID 及 App 和 macOS 版本号，用来统计活跃用户，不保存 IP 地址，可在设置 › 通用中关闭（关闭后会删除这个 ID）。查询歌词时，会把当前歌曲的歌名、歌手、专辑和时长发给第三方歌词源 LRCLIB 和网易云音乐，具体字段随查询接口而异。歌词会缓存在本机，可在设置中清除。

## 关于此仓库

此公开仓库只放官网和安装包，不包含 App 源码。歌词由第三方提供，可能缺失或不准确；遇到问题请通过上方反馈链接说明 macOS 版本、播放器和复现步骤，勿提交私人信息或歌词全文。

Linger 是独立开发的工具，与 Apple、Spotify、网易云音乐没有关联。相关商标归各自所有者所有。
