var coinCombo = function(cents) {
    var output = [1, 5, 10, 25];
    for(var i = 3; i >= 0; i--){
        output[i] = [Math.floor(cents/output[i]), cents = cents%output[i]][0];
    }
    return output;
};