exports.getDate = function(){
    const options = {weekday: "long", day: "numeric", month: "long"};
    const currentDay = new Date();
    return currentDay.toLocaleDateString("en-US", options);
}

exports.getDay = function(){
    const options = {weekday: "long"};
    const currentDay = new Date();
    return currentDay.toLocaleDateString("en-US", options);
}