function protegercodigo() {
    if (event.button==2||event.button==3){
            alert('Erro - Esta ação não é permitida neste site.');}
            }
            document.onmousedown=protegercodigo

document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 ||    e.keyCode === 117 || e.keycode === 17 || e.keycode === 85)) {
        alert('Erro - Esta ação não é permitida neste site.');}
            return false;
};