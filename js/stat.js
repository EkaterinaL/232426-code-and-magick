'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var FONT_GAP = 16;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomColor = function () {
  return 'rgba(0, 0, 255, ' + Math.random() + ')';
};

var getBar = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var barX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var barY = CLOUD_Y + GAP + (FONT_GAP + GAP) * 2 + GAP + BAR_HEIGHT - Math.floor(times[i]) * BAR_HEIGHT / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), barX, barY - FONT_GAP);
    ctx.fillText(names[i], barX, CLOUD_Y + GAP + (FONT_GAP + GAP) * 2 + GAP + BAR_HEIGHT + FONT_GAP);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }
    ctx.fillRect(barX, barY, BAR_WIDTH, Math.floor(times[i]) * BAR_HEIGHT / maxTime);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура! Вы победили', CLOUD_X + 20, CLOUD_Y + 30);
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 50);

  ctx.fillStyle = '#000';
  getBar(ctx, names, times);
};
