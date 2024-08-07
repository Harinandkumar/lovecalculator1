function calculateLove() {
    const yourName = document.getElementById('yourName').value;
    const partnerName = document.getElementById('partnerName').value;
    const min = 60;
    const max = 99;
    const percentage = Math.floor(Math.random() * (max - min + 1)) + min;
    if (yourName && partnerName) {
        document.getElementById('percentage').innerText = `${percentage}%`;
        document.getElementById('calculateButton').disabled = true;
        document.getElementById('calculateButton').innerText = 'Calculation done';
        document.getElementById('resetButtonContainer').style.display = 'block'; // Show the reset button
    } else {
        alert('Please enter both names.');
    }
}

function resetFields() {
    document.getElementById('yourName').value = '';
    document.getElementById('partnerName').value = '';
    document.getElementById('percentage').innerText = '';
    document.getElementById('calculateButton').disabled = false;
    document.getElementById('calculateButton').innerText = 'Calculate LOVE';
    document.getElementById('resetButtonContainer').style.display = 'none'; // Hide the reset button
}
