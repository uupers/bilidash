def current_dt_str():
    """
    returns year-month-day-hour-min-sec
    """
    dt_now = datetime.datetime.now()
    # datetime.date(dt_now.year, dt_now.month, dt_now.day)
    return str( dt_now.year ) + '-'+  str( dt_now.month ) + '-'+  str( dt_now.day ) + '-'+  str( dt_now.hour ) + '-'+  str( dt_now.minute ) + '-'+  str( dt_now.second )


def permcronsched(scheduler, interval, action, actionargs=()):
    """
    A permenant job scheduler that doesn't stop unless it's stopped by hand
    """

    action(*actionargs)
    scheduler.enter(interval, 1, cronsched, (scheduler, interval, action, actionargs))
    