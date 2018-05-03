def DTRecorder(current_dt, data, filename, mode=None):
    """
    Record an array of data with the current time
    """

    if mode==None:
        mode="a"
        
    dt = current_dt
    
    with open(filename, mode) as f:
        f.write( dt + ',' )
        [f.write(i + ',') for i in data[:-1]]
        f.write(data[-1])
        f.write('\n')