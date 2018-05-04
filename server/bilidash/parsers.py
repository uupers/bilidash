import requests

def groomaid(beasoup):
    """
    Parse data for groom (first row of recommendation)
    beasoup is the BeautifulSoup object with features lxml
    """

    groom = beasoup.find_all('div',{'class': 'groom-module home-card'})

    aid = [i.a['href'].split('av')[1][:-1] for i in groom]
    
    return aid

def avapi(apiurl):
    """
    Returns the api data for vid
    """

    rsp = requests.get(apiurl)
    avdata = rsp.json()['data']
    
    return avdata