WeemoDragNDrop = function () {
    return {
        startMoving : function (evt) {
        document.getElementById('weemo-buttonsbar').style.display = 'none';
        document.body.className = document.body.className+' userSelectNone';
        evt = evt || window.event;
        var posX = evt.clientX,
            posY = evt.clientY,
            a = document.getElementById('weemo-videobox'),
            divTop = a.style.top,
            divLeft = a.style.left,
            diffX,
            diffY;
        divTop = divTop.replace('px', '');
        divLeft = divLeft.replace('px', '');
        diffX = posX - divLeft;
        diffY = posY - divTop;
        
        document.onmousemove = function (evt) {
            evt = evt || window.event;
            posX = evt.clientX;
            posY = evt.clientY;
            var aX = posX - diffX,
                aY = posY - diffY;
             
            WeemoDragNDrop.move('weemo-videobox', aX, aY);
        };
        },
        startMovingPIP : function (evt) {
            document.getElementById('weemo-buttonsbar').style.display = 'none';
            document.body.className = document.body.className+' userSelectNone';
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
                a = document.getElementById('weemo-selfview'),
                divHeight = document.getElementById('weemo-selfview').offsetWidth,
                divWidth = document.getElementById('weemo-selfview').offsetWidth,
                divTop,
                divLeft,
                divBottom = a.style.bottom,
                divRight = a.style.right,
                diffX,
                diffY;                       
            
            var  style = window.getComputedStyle(a);
            var divBottom = style.getPropertyValue('bottom');
            var divRight = style.getPropertyValue('right');
            
            boxWidth = document.getElementById('weemo-videobox').offsetWidth;
            boxHeight = document.getElementById('weemo-videobox').offsetHeight;
            
            divBottom = divBottom.replace('px', ''),
            divRight = divRight.replace('px', ''),
            divTop = (parseInt(boxHeight) - (parseInt(divHeight) + parseInt(divBottom)));
            divLeft = (parseInt(boxWidth) - (parseInt(divWidth) + parseInt(divRight)));
            
            diffX = posX - divLeft;
            diffY = posY - divTop;
            document.onmousemove = function (evt) {
                evt = evt || window.event;
                posX = evt.clientX;
                posY = evt.clientY;
                var aX = posX - diffX,
                    aY = posY - diffY;
                WeemoDragNDrop.movePIP('weemo-selfview', aX, aY, boxWidth, boxHeight);
            };
        },
        stopMoving : function () {
            document.getElementById('weemo-videobox').style.position = 'fixed';
            if (document.getElementById('weemo-buttonsbar')) {
                document.getElementById('weemo-buttonsbar').style.display = 'block';
                WeemoDragNDrop.removeClass(document.body, 'userSelectNone');
                document.onmousemove = function () { };
            }
        },
        move : function (divid, xpos, ypos) { // Function to assign the style rules to the element
            var a = document.getElementById(divid),
                minX = (2 * (document.getElementById("weemo-videobox").getBoundingClientRect().width / 3)),
                miny = (2 * document.getElementById("weemo-videobox").getBoundingClientRect().height / 3),
                maxX = (window.innerWidth - (minX / 2)),
                maxy = (window.innerHeight - (miny / 2)),
                moveX = Math.max(-minX, Math.min(xpos, maxX)),
                moveY = Math.max(-miny, Math.min(ypos, maxy));
            
            a.style.left = moveX + 'px';
            a.style.top = moveY + 'px';
        },
        movePIP : function (divid, xpos, ypos, boxWidth, boxHeight) { // Function to assign the style rules to the element
            var offsets = WeemoDragNDrop.getPos(divid),
                moveX = Math.max(0, Math.min(xpos, (offsets.remoteWidth - offsets.pipWidth))),
                moveY = Math.max(0, Math.min(ypos, (offsets.remoteHeight - offsets.pipHeight)));
            
            moveX = ((boxWidth) - (moveX + offsets.pipWidth));
            moveY = ((boxHeight) - (moveY + offsets.pipHeight));
            
            document.getElementById(divid).style.right = moveX + 'px';
            document.getElementById(divid).style.bottom =  moveY + 'px';
        },
        getPos : function (el) {
            var divOffsets = document.getElementById(el).getBoundingClientRect(),
                parentOffsets = document.getElementById("weemo-remotevideo").getBoundingClientRect();
            return { pipWidth : divOffsets.width, pipHeight : divOffsets.height, remoteWidth : parentOffsets.width, remoteHeight : parentOffsets.height };
        },
        removeClass : function(node, cls) {
            if(node && node.className && node.className.indexOf(cls) >= 0) {
                var pattern = new RegExp('\\s*' + cls + '\\s*');
                node.className = node.className.replace(pattern, '');
            }
        }
    };
}();