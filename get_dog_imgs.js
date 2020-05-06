             // this will get the dog imgs
            async function getDogImg(){
                const responce = await fetch('https://random.dog/woof.json')
                const json = await responce.json()
                console.log("i got the img!!!!!!!!!");
                if(checkURL(json.url)){
                    img1 = loadImage(json.url)
                    ok = true
                }else{
                    ok = false
                }
                
                //return img1
            }
