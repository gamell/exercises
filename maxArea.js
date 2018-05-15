var maxArea = function(heights) {
    var maxArea = 0;
    var left = 0;
    var right = 1;
    var leftArea, rightArea;
    for(var i = 1; i < heights.lenght; i++){
        leftArea = Math.min(heights[left], heights[i]) * (i-left);
        rightArea = Math.min(heights[right], heights[i]) * (i-right);
        if(rightArea > maxArea) {
            maxArea = rightArea;
            left = right;
            right = i;
        } else if (leftArea > maxArea) {
            maxArea = leftArea;
            right = i;
        }
    }
    return maxArea;
  };

  console.log(maxArea([1,1,1]));
