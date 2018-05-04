import json
import requests

import datetime
from datetime import timedelta
import sched, time
from time import sleep
import os
import sys

import bilidash

# Define parameters and get data

monitor_delta = 60*10; # scraping time 
sleep_delta = 10; # sleep time for each api access
total_run_time = 20 # in unit of DAYS
data_folder = "track-data/"; # the folder that holds all the tracking data

groomdatafile = '2018-5-4-14-35-36-data.csv' # file of the data scraped from front page: it provides the video ids for the run
av_array = os.popen("tail -n 1 %s" % groomdatafile).read().rstrip('\n').split(',') # Get the most recent video ids that are on ront page groom
av_array = av_array[1:]
api_url_base = 'https://api.bilibili.com/x/web-interface/archive/stat?aid='

# Create scheduler
s = sched.scheduler(time.time, time.sleep)
start_time = datetime.datetime.now()
end_time = start_time + timedelta(days=total_run_time)

def scrape():
    
    for av in av_array:
        api_vid = av
        ret = bilidash.avapi(api_url_base+api_vid)
        avtrack_file = data_folder + api_vid + '.csv'
        arr = [ ret['view'], ret['danmaku'], ret['reply'], ret['favorite'], ret['coin'], ret['share'], ret['now_rank'], ret['his_rank'], ret['no_reprint'], ret['copyright'] ]
        arr = [str(i) for i in arr ]
        
        if os.path.exists(avtrack_file):
            append_write = 'a' # append if already exists
        else:
            append_write = 'w' # make a new file if not
        
        bilidash.DTRecorder(bilidash.current_dt_str(), arr, avtrack_file, append_write)
        
        sleep(sleep_delta) #sleep some seconds in case of jamming/blocking
        
    if datetime.datetime.now() > end_time:
        
        print("Started at "+dt2str(start_time) + '\n Ended at '+dt2str( datetime.datetime.now() ) )
        sys.exit

        
bilidash.permcronsched( s, monitor_delta, scrape )

s.run()

        
        

