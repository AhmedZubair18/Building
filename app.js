function moveLift(floor) {
    const lift = document.getElementById('lift');
    const floors = {
        third: 450,
        second: 300,
        first: 150,
        ground: 0
    };
    lift.style.bottom = floors[floor] + 'px';
}