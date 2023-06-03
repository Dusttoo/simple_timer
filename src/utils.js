export const calculateMilliseconds = (minutes) => {
    return minutes * 60000
};

export const millisecondsToMinutes = (milliseconds => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor(60 * (milliseconds / 1000 / 60 - minutes ));

    return `${minutes} minutes and ${seconds} seconds`
});