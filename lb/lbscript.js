const textarea_JS = document.querySelector('textarea[name=comment]');
const countView = document.getElementById('countView');
textarea_JS.addEventListener('input',()=>{
    const len = textarea_JS.value.length;
    countView.textContent = `現在: ${len}文字`;
});