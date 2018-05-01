from bs4 import BeautifulSoup
from urllib.request import urlopen
import datetime


baseurl='https://www.bilibili.com/'

def groomjob(url):
    html = urlopen(url).read().decode('utf-8')

    soup = BeautifulSoup(html, features='lxml')
    groom = soup.find_all('div',{'class': 'groom-module home-card'})

    aid = [i.a['href'].split('av')[1][:-1] for i in groom]
    return aid
    

def recordgroom():
    dt = str(datetime.datetime.now() )
    with open("data.txt", "a") as f:
        f.write( dt + ',' )
        [f.write(i+',') for i in aid]
        f.write('\n')



hourflag = datetime.datetime.now().hour

while True:
    
    if datetime.datetime.now().hour > hourflag:
    
        print('Job Running')

        recordgroom()

        hourflag = datetime.datetime.now().hour
    
            
