            function checkURL(url) {
                return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
            }
            function setup(){
                createCanvas(windowWidth,windowHeight)
                getDogImg()
                setInterval(() => {
                    getDogImg()
                },1000)
            }
            function draw(){
                //translate(width/2,height/2)
                imageMode(CENTER);
                //background(225,0,0)
                if(ok){
                    image(img1,width/2,height/2,width,height)
                }
            }

