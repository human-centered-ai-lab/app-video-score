from server.app.services.movie_service import MovieService
import os

BASEDIRNAME = "/data/movies/"

def stripeStaticURL (movie, n):
    stripeimagedir = stripeBaseDirectory (movie)
    fn = os.path.join(stripeimagedir, "s%06d.jpg" % n)
    url = fn.replace ("/data/movies", "static")
    return url

def stripeFileName (movie, n):
    stripeimagedir = stripeBaseDirectory (movie)
    fn = os.path.join(stripeimagedir, "s%06d.jpg" % n)
    return fn

def keyFrameName (movie, n, prefix = ""):
    keyframedir = keframeBaseDirectory (movie)
    fn = os.path.join(keyframedir, "%s%08d.jpg" % (prefix, n) )
    return fn

def stripeBaseDirectory (movie):

    dirname = os.path.dirname("/data/movies/yt/")

    stripeimagedir = ""

    if (movie.source == "YOUTUBE"):
        dirname = os.path.dirname("/data/movies/yt/")
        movieid = movie.uri.rsplit('/', 1)[-1]
        moviedir = os.path.join(dirname, movieid)
        stripeimagedir = os.path.join(moviedir, "stripes")


    if (movie.source == "FILESYSTEM"):
        dirname = os.path.dirname("/data/movies/local/")
        movieid = movie.uri.rsplit('/', 1)[-1]
        moviedir = os.path.join(dirname, movieid)
        stripeimagedir = os.path.join(moviedir, "stripes")    

    return stripeimagedir


def keframeBaseDirectory (movie):

    keyframebasedir = ""

    if (movie.source == "YOUTUBE"):
        dirname = os.path.dirname("/data/movies/yt/")
        movieid = movie.uri.rsplit('/', 1)[-1]
        moviedir = os.path.join(dirname, movieid)
        keyframebasedir = os.path.join(moviedir, "keyframes")


    if (movie.source == "FILESYSTEM"):
        dirname = os.path.dirname("/data/movies/local/")
        movieid = movie.uri.rsplit('/', 1)[-1]
        moviedir = os.path.join(dirname, movieid)
        keyframebasedir = os.path.join(moviedir, "keyframes")    

    return keyframebasedir

def movieCacheDirectory (movie):
    path = os.path.join(BASEDIRNAME, "cache")
    path = os.path.join(path, movie.uuid)
    return path

def movieFileName (movie):
    path = os.path.join(BASEDIRNAME, movie.uri)
    return path