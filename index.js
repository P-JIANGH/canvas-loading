window.onload = () => {
    var mainR1 = 200,                       // 参数
        offset = 0,                        // 参数
        dr = mainR1 / 10,
        circleX = circleY = mainR1 + offset;
    var beginX1 = beginX2 = circleX,
        beginY1 = offset,
        subR = dr / 2,
        beginY2 = dr + beginY1,
        mainR2 = mainR1 - dr,
    
        subX1 = beginX2,
        subY1 = beginY2,
        subX2 = beginX1 + (mainR1 / Math.SQRT2),
        subY2 = beginY1 + mainR1 - (mainR1 / Math.SQRT2),
        subCircleX1 = beginX1,
        subCircleY1 = beginY1 + subR
        subCircleX2 = beginX1 + (mainR1 / Math.SQRT2) - (dr / (2 * Math.SQRT2))
        subCircleY2 = beginY1 + mainR1 - (mainR1 / Math.SQRT2) + (dr / (2 * Math.SQRT2));
    
    var canvas = document.createElement('canvas');
    canvas.width = 2 * mainR1;
    canvas.height = 2 * mainR1;
    var ctx = canvas.getContext('2d');
    var gradient = ctx.createRadialGradient(
        beginX2 + mainR2 / Math.SQRT2 + Math.SQRT2 * subR,
        circleY - mainR1 / Math.SQRT2 + Math.SQRT2,
        2 * subR,
        beginX2 + mainR2 / Math.SQRT2 + Math.SQRT2 * subR,
        circleY - mainR1 / Math.SQRT2 + Math.SQRT2,
        mainR1
    );
    gradient.addColorStop(0, '#00CCFF');
    gradient.addColorStop(1, '#CCFFFF');
    ctx.fillStyle = gradient;
    var path = new Path2D();
    // path.beginPath();
    path.moveTo(beginX1, beginY1)
    path.arc(circleX, circleY, mainR1, - Math.PI / 2, - Math.PI / 4);

    path.lineTo(circleX, circleY);
    path.lineTo(beginX1, beginY1);

    path.moveTo(subX1, subY1);
    path.arc(subCircleX1, subCircleY1, subR, Math.PI / 2, - Math.PI / 2)

    path.moveTo(subX2, subY2);
    path.arc(subCircleX2, subCircleY2, subR, - Math.PI / 4, Math.PI / 4 * 3);
    ctx.fill(path);

    var exPath = new Path2D();
    
    exPath.moveTo(beginX2, beginY2)
    exPath.arc(circleX, circleY, mainR2, - Math.PI / 2, - Math.PI / 40 * 9);
    exPath.lineTo(circleX, circleY);
    exPath.lineTo(beginX2, beginY2);
    ctx.fillStyle = '#ffffff';
    ctx.fill(exPath);
    ctx.save();

    var loading = document.createElement('canvas');
    loading.width = 2 * mainR1;
    loading.height = 2 * mainR1;
    var loadingContext = loading.getContext('2d');
    i = Math.PI / 180
    loadingContext.translate(mainR1, mainR1);
    setInterval(() =>　{
        loadingContext.clearRect(0, 0, 2 * mainR1, 2 * mainR1);
        loadingContext.rotate(Math.PI / 180 * 4)
        loadingContext.drawImage(canvas, -mainR1, -mainR1);
    }, 10)

    document.getElementById('loading-area').append(loading);
}
