function openSocialMedia(url) {
    window.open(url, '_blank');
}

function openCartoonMedia(url) {
    window.open(url, '_blank');
}

function openSearchEngine(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    const drawerToggle = document.querySelector('.drawer-toggle');
    const drawerNav = document.querySelector('.drawer');

    drawerToggle.addEventListener('click', function () {
        drawerNav.style.left = drawerNav.style.left === '0px' ? '-250px' : '0px';
    });
});
