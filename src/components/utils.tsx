
export function organizeData(data){
    let weatherByDate = [];
    for (let i of data.list) {
        let date: string = i.dt_txt.substring(0, 10);
        if (date in weatherByDate) {
            weatherByDate[date].push(i);
        } else {
            weatherByDate[date] = [i];
        }
    }
    return weatherByDate;
}




