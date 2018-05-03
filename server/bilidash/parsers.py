
def groomjob(beasoup):
    """
    Parse data for groom (first row of recommendation)
    beasoup is the BeautifulSoup object with features lxml
    """

    groom = beasoup.find_all('div',{'class': 'groom-module home-card'})

    aid = [i.a['href'].split('av')[1][:-1] for i in groom]
    
    return aid