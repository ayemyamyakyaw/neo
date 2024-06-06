$(document).ready(function() {
    // Function to update progress bar with animation
    function updateProgressBar($element, value) {
        $element.animate({ width: value + '%' }, 1000);
        $element.text(value + '%');
    }

    // Generate random usage percentages
    const cpuUsage = Math.floor(Math.random() * 101);
    const ramUsage = Math.floor(Math.random() * 101);
    const diskUsage = Math.floor(Math.random() * 101);
    const networkUsage = Math.floor(Math.random() * 101);

    // Update progress bars with animation
    updateProgressBar($('#cpuBar'), cpuUsage);
    updateProgressBar($('#ramBar'), ramUsage);
    updateProgressBar($('#diskBar'), diskUsage);
    updateProgressBar($('#networkBar'), networkUsage);
});

