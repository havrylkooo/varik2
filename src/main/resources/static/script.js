const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const toolbar = document.getElementById('toolbar');
const colorPicker = document.getElementById('colorPicker');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

let currentTool = 'circle';
let drawing = false;
let startX = 0;
let startY = 0;
let currentColor = colorPicker.value;

toolbar.addEventListener('click', function (e) {
    if (e.target.dataset.tool) {
        currentTool = e.target.dataset.tool;
    }
});

colorPicker.addEventListener('input', function () {
    currentColor = this.value;
});

canvas.addEventListener('mousedown', function (e) {
    drawing = true;
    const rect = canvas.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;

    if (currentTool === 'pencil' || currentTool === 'eraser') {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
    }
});

canvas.addEventListener('mousemove', function (e) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (currentTool === 'pencil' || currentTool === 'eraser') {
        ctx.lineTo(x, y);
        ctx.strokeStyle = currentTool === 'eraser' ? '#f4f6f8' : currentColor;
        ctx.lineWidth = currentTool === 'eraser' ? 20 : 1;
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', function (e) {
    if (!drawing) return;
    drawing = false;

    const rect = canvas.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;

    ctx.strokeStyle = currentColor;
    ctx.fillStyle = currentColor;

    const width = endX - startX;
    const height = endY - startY;

    switch (currentTool) {
        case 'circle':
            const radius = Math.sqrt(width ** 2 + height ** 2) / 2;
            ctx.beginPath();
            ctx.arc(startX + width / 2, startY + height / 2, radius, 0, Math.PI * 2);
            ctx.fill();
            break;

        case 'square':
            const size = Math.min(Math.abs(width), Math.abs(height));
            ctx.fillRect(startX, startY, Math.sign(width) * size, Math.sign(height) * size);
            break;

        case 'rectangle':
            ctx.fillRect(startX, startY, width, height);
            break;

        case 'line':
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            break;

        case 'pencil':
        case 'eraser':
            ctx.closePath();
            break;
    }
});
