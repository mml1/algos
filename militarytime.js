/* Converts a 12hr format time into 24 hr format */
function main() {
    
    var time = readLine(); // "12:00:00PM"
    var amOrPm = time.substring(8,9);
    var hr = parseInt(time.substring(0,2));
    var rest = time.substring(2,8);
    var converted = "";
    
    var hours = {
        12:12,
        1: 13,
        2: 14,
        3: 15,
        4: 16,
        5: 17,
        6: 18,
        7: 19,
        8: 20,
        9: 21,
        10: 22,
        11: 23
    }
    
    if(amOrPm == "P"){
        for(key in hours){
            if(hr == key){
                converted += hours[key] + rest;
            }
        }
    } else {
        if(hr == "12"){
            converted += "00"+ rest;
        } else {
            converted += time.substring(0,8);
        }
        
    }
    console.log(converted);
}