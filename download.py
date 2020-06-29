from __future__ import unicode_literals
import youtube_dl
import os


ydl_opts = {}
os.chdir('C:/Users/utilisateur/Desktop')
with youtube_dl.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://www.youtube.com/watch?v=bU5HgCaLU4Q'])