export const calculateMilliseconds = (minutes) => {
    return minutes * 60000
};

export const millisecondsToMinutes = (milliseconds => {
    const minutes = Math.floor(milliseconds / 60000);
    let seconds = Math.round(60 * (milliseconds / 60000 - minutes ));
    if(seconds < 10) {seconds = `0${seconds}`}
    return `${minutes}:${seconds}`
});