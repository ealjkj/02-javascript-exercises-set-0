var columns = document.getElementsByClassName('column')
var buttons = document.getElementsByClassName('btn')



for(let i=0; i < buttons.length; i++){
    buttons[i].onclick = function setLayout() {
        let changeFactor = i
        if(i === 0) {
            changeFactor = 1
        }
        columns[0].style.flexBasis = `${25 + changeFactor*25}\%`
    }
} 