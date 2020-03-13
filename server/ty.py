import cv2
import pafy
import youtube_dl



url =   'https://www.youtube.com/watch?v=4iwyvroMhDE'
ydl = youtube_dl.YoutubeDL({'outtmpl': '%(id)s%(ext)s'})

with ydl:
    result = ydl.extract_info(
        'https://www.youtube.com/watch?v=4iwyvroMhDE',
        download=False # We just want to extract the info
    )

if 'entries' in result:
    # Can be a playlist or a list of videos
    video = result['entries'][0]
else:
    # Just a video
    video = result

#print(video)
video_url = video['webpage_url']
print(video_url)

print (cv2.__version__)


playurl_debug = 'https://r4---sn-h0jeen76.googlevideo.com/videoplayback?initcwndbps=1542500&source=youtube&dur=0.000&clen=293704509&expire=1546615021&ei=jCQvXKTvNYi-hAfZ-YaQCg&mm=31%2C26&gcr=at&itag=43&requiressl=yes&signature=0CC0C9047AA8A79A27958EB7C6AD9FD39FE2180E.DE70A5F47E04FD500C351791A8EC8471D2A7D847&ms=au%2Conr&fvip=4&mv=m&sparams=clen%2Cdur%2Cei%2Cgcr%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&mt=1546593338&pl=15&mime=video%2Fwebm&id=o-AE5boeT6HOmtzGF2_vjqGg6jayZKkFQUBgykG0dmHiad&gir=yes&mn=sn-h0jeen76%2Csn-4g5ednse&key=yt6&ip=85.127.248.13&ipbits=0&c=WEB&ratebypass=yes&lmt=1463132193566009'
playurl_debug = 'https://r4---sn-h0jeen76.googlevideo.com/videoplayback?gir=yes&sparams=clen%2Cdur%2Cei%2Cgcr%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&c=WEB&gcr=at&mv=m&pl=15&mt=1546593222&ms=au%2Conr&ei=ZSQvXPrIKZ-OmLAP5NCK0Ak&fvip=4&signature=1445E76C2106D4A83DF36534D37926F2A0B069B1.30A608C80984BE0BCE1AF13B6478908D48C9C423&clen=293704509&key=yt6&mn=sn-h0jeen76%2Csn-4g5e6ne6&mm=31%2C26&id=o-ALd_OvGpgGMTsIiPyVQjY65rybfqAmIrwQyqsFIyzG1i&source=youtube&dur=0.000&ip=85.127.248.13&itag=43&lmt=1463132193566009&requiressl=yes&initcwndbps=1587500&ipbits=0&ratebypass=yes&expire=1546614981&mime=video%2Fwebm'

vPafy = pafy.new(url)
print(vPafy)
play = vPafy.getbest()
print(play)
print(play.url)
cap = cv2.VideoCapture(play.url)

length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
fps = cap.get(cv2.CAP_PROP_FPS)
print("OPENING THE VIDEO WITH ", length, width, height, fps)

