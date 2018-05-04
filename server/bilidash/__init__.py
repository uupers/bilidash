from bs4 import BeautifulSoup
from urllib.request import urlopen
import datetime
import json
import requests

from .recorder import DTRecorder
from .parsers import groomaid, avapi
from .cronjob import permcronsched, current_dt_str, dt2str




if __name__ == "__main__":
    import sys
    fib(int(sys.argv[1]))
