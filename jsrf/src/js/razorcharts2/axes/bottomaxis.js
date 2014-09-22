define(['razorcharts2/axes/axis'], function (Axis) {
    var BottomAxis = function () {
        this.registerTransformer (BottomAxisTransformer);
    };

    BottomAxis.prototype = new Axis ();
    BottomAxis.prototype.constructor = BottomAxis;

    function BottomAxisTransformer (self) {
        console.log ('Transformer called!');
        var width = self.width,
            $ticks = self.$ticks,
            ticks = self.ticks,
            scale = self.scale,
            tickWidth = width / ticks.length;
                
        for(var i=0; i<ticks.length; ++i) {
            var x = scale.calc(ticks[i]) + tickWidth / 2;
            $ticks[i].css ({
                'transform': 'translate(' + x + 'px,0)',
                'text-anchor': 'middle'
            });
        }

        var line = self.line = self.paper.line (0, 0, width, 0);
        self.core.append (line);
    };

    return BottomAxis;
});