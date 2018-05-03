# Import packages and modules
from bs4 import BeautifulSoup
from urllib.request import urlopen
import datetime
import sched, time

import bilidash

# Define useful functions

def current_dt_str():
    """
    returns year-month-day-hour-min-sec
    """
    dt_now = datetime.datetime.now()
    # datetime.date(dt_now.year, dt_now.month, dt_now.day)
    return str( dt_now.year ) + '-'+  str( dt_now.month ) + '-'+  str( dt_now.day ) + '-'+  str( dt_now.hour ) + '-'+  str( dt_now.minute ) + '-'+  str( dt_now.second )



# Define defaults

dt_now = current_dt_str()
datafile = dt_now + "data.csv"
baseurl='https://www.bilibili.com/'
dt_now = str(datetime.datetime.now() )

# Scrape raw data
html = urlopen(baseurl).read().decode('utf-8')
soup = BeautifulSoup(html, features='lxml')



# Create scheduler
s = sched.scheduler(time.time, time.sleep)


# Run program
def groomjob():
    
    packdata = bilidash.groomjob(soup)
    bilidash.DTRecorder(dt_now, packdata, datafile )

bilidash.permcronsched( s, 1, groomjob )

s.run()



    
            
