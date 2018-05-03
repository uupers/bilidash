# Import packages and modules
from bs4 import BeautifulSoup
from urllib.request import urlopen
import datetime
import sched, time
import os

import bilidash


# Define defaults

dt_now = bilidash.current_dt_str()
datafile = dt_now + "data.csv"
baseurl='https://www.bilibili.com/'
dt_now = str(datetime.datetime.now() )

# Define useful functions
if os.path.exists(datafile):
    append_write = 'a' # append if already exists
else:
    append_write = 'w' # make a new file if not


# Scrape raw data
html = urlopen(baseurl).read().decode('utf-8')
soup = BeautifulSoup(html, features='lxml')



# Create scheduler
s = sched.scheduler(time.time, time.sleep)


# Run program
def groomjob():
    
    packdata = bilidash.groomjob(soup)
    bilidash.DTRecorder(dt_now, packdata, datafile, append_write)

bilidash.permcronsched( s, 1, groomjob )

s.run()



    
            
