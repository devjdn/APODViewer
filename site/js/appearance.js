let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');


console.log(darkMode);

//check if dark mode is enabled
//if enabled we want to turn it off
//if disabled turn it on
const enableGreyMode = () => {
    //add class darkmode to the body
    document.body.classList.add('greymode');
    //update darkmode in the local storage
    localStorage.setItem('greyMode', 'enabled');
}; 


const enableDarkMode = () => {
    //add class darkmode to the body
    document.body.classList.add('darkmode');
    //update darkmode in the local storage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    //add class darkmode to the body
    document.body.classList.remove('darkmode');
    //update darkmode in the local storage
    localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
    enableDarkMode();
}


darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
});

function toggleColorScheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
        enableDarkMode();
        // Add other styles for light mode
    } else {
        disableDarkMode();
        // Add other styles for dark mode
    }
}

/* function toggleActionMenu(button) {
    const toggleBtn = button;
    const menuId = toggleBtn.getAttribute('data-menu-id');
    const actionMenu = document.getElementById(menuId);
   
    if (actionMenu.style.opacity === '0') {
        actionMenu.style.opacity = '1';
    } else {
        actionMenu.style.opacity = '0';
    }
} */