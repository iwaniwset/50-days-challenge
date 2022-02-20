const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel');

container.addEventListener('click', function (e){
    let clickedPanel = null
    if (e.target.tagName == 'h2'){
        clickedPanel = e.target.parentNode;
    } else {
        clickedPanel = e.target
    }
    removeActivePanel()
    clickedPanel.classList.add('active')
})

function removeActivePanel(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}