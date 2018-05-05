import json
import requests

import datetime
import sched, time
import os

import bilidash


monitor_delta = 60*60*5; # scraping time 

start_time = datetime.datetime.now()
started = bilidash.dt2str(start_time) 
params_folder = 'params/'


mid = '299999920'
# mid= '1492' # for testing
mid_space_url_base = 'https://api.bilibili.com/x/web-interface/card?mid='+mid

mid_vid_url_base = 'http://space.bilibili.com/ajax/member/getSubmitVideos?mid='+mid


s = sched.scheduler(time.time, time.sleep)


def job():
    """
    fetch api data and write to file
    """
    mid_space_rsp = requests.get( mid_space_url_base )
    mid_space_data = mid_space_rsp.json()['data']
    mid_vid_space_rsp = requests.get( mid_vid_url_base )
    mid_vid_data = mid_vid_space_rsp.json()['data']


    mid_vid_vlist = mid_vid_data['vlist']

    with open(params_folder+'uupers-vid-params.json', 'w') as outfile:
        json.dump(mid_vid_vlist, outfile)
        

        
bilidash.permcronsched( s, monitor_delta, job )

s.run()