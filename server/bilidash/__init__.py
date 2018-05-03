from bs4 import BeautifulSoup
from urllib.request import urlopen
import datetime

from .recorder import DTRecorder
from .parsers import groomjob
from .cron import permcronsched



if __name__ == "__main__":
    import sys
    fib(int(sys.argv[1]))
