let LightMode = localStorage.getItem('lightMode');

console.log(LightMode);

//check if Light mode is enabled
//if enabled we want to turn it off
//if disabled turn it on
const enableGreyMode = () => {
    //add class Lightmode to the body
    document.body.classList.add('greymode');
    //update Lightmode in the local storage
    localStorage.setItem('greyMode', 'enabled');
}; 


const enableLightMode = () => {
    //add class Lightmode to the body
    document.body.classList.add('lightmode');
    //update Lightmode in the local storage
    localStorage.setItem('lightMode', 'enabled');
};

const disableLightMode = () => {
    //add class Lightmode to the body
    document.body.classList.remove('lightmode');
    //update Lightmode in the local storage
    localStorage.setItem('lightMode', null);
};

if (LightMode === 'enabled') {
    enableLightMode();
}
/*LightModeToggle.addEventListener('click', () => {
    LightMode = localStorage.getItem('LightMode');
    
    if (LightMode !== 'enabled') {
        enableLightMode();
        console.log(LightMode);
    } else {
        disableLightMode();
        console.log(LightMode);
    }
});*/

