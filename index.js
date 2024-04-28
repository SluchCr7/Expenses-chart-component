let cards = document.getElementById("chart_container")
window.onload=() =>{
    fetch("/data.json")
        .then(res => res.json())
        .then(data => {
            cards.innerHTML = ""
            for (i = 0; i <= data.length; i++){
                cards.innerHTML +=
                    `
                    <div class="chart_container_item_cont">
                        <span class="salary" id="${data[i].day}">${data[i].amount}</span>
                        <div class="chart_container_item ${data[i].day}"></div>
                        <span class="chart_container_item_title">${data[i].day}</span>
                    </div>
                    `
                // document.getElementById(data[i].day).style.height = `${data[i].amount}%`
            }
        })
}
