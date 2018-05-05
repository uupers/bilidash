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
data_folder = "track-data/uupers/"; # the folder that holds all the tracking data
uupers_data = "uupers.csv";

mid = '299999920'
api_url_base = 'https://api.bilibili.com/x/web-interface/archive/stat?aid='
mid_space_url_base = 'https://api.bilibili.com/x/web-interface/card?mid='


s = sched.scheduler(time.time, time.sleep)

def job():
    """
    Tracking uupers
    """
    
    mid_space_rsp = requests.get( mid_space_url_base + mid )
    mid_space_data = mid_space_rsp.json()['data']
    uupers_followers = str(mid_space_data['follower'])
    
    uupers_file = data_folder + uupers_data
    
    if os.path.exists(uupers_file):
        append_write = 'a' # append if already exists
    else:
        append_write = 'w' # make a new file if not

    bilidash.DTRecorder(bilidash.current_dt_str(), [uupers_followers], uupers_file, append_write)

    sleep(sleep_delta) #sleep some seconds in case of jamming/blocking
        
    
    
    # fetch list of videos to be tracked
    json_data=open('params/uupers-vid-params.json').read()
    mid_vid_vlist_reloaded = json.loads(json_data)
    track_vlist = [ vid['aid'] for vid in mid_vid_vlist_reloaded ]
    
    for av in track_vlist:
        api_vid = str(av)
        ret = bilidash.avapi(api_url_base + api_vid)
        avtrack_file = data_folder + api_vid + '.csv'
        arr = [ ret['view'], ret['danmaku'], ret['reply'], ret['favorite'], ret['coin'], ret['share'], ret['now_rank'], ret['his_rank'], ret['no_reprint'], ret['copyright'] ]
        arr = [str(i) for i in arr ]
        
        if os.path.exists(avtrack_file):
            append_write = 'a' # append if already exists
        else:
            append_write = 'w' # make a new file if not
        
        bilidash.DTRecorder(bilidash.current_dt_str(), arr, avtrack_file, append_write)
        
        sleep(sleep_delta) #sleep some seconds in case of jamming/blocking
        

bilidash.permcronsched( s, monitor_delta, job )

s.run()