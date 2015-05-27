function calculateAngle(hour, minute) {
    if (hour === 12 && minute === 0) {
        return 0;
    } else if (hour === 0) {
        return minute * 6;
    } else {
        // hour degree rate of change per minute
        // 360 degree = 12 hours
        // Rate of change = 360 degrees/720 minutes = 0.5 degrees/minute
        var hourAngle = ((hour * 60) + minute) * 0.5;
        // 360 degress = 60 minutes.
        // Rate of change = 360 degrees/60 minutes = 6 degrees/minute
        var minuteAngle = minute * 6;
        return Math.abs(hourAngle - minuteAngle);
    }

}

// What Did I learn ? I learn that problem solving needs to take into account every possible input and outcome.
// The best solution is the solution that can provide an accurate answer for every possible input.