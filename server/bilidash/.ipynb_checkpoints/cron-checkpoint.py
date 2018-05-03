def permcronsched(scheduler, interval, action, actionargs=()):
    """
    A permenant job scheduler that doesn't stop unless it's stopped by hand
    """

    action(*actionargs)
    scheduler.enter(interval, 1, cronsched,
                    (scheduler, interval, action, actionargs))
    