             // this will get the dog imgs
            let img2;
            let imgs;
            async function getDogImg(){
//                 const responce = await fetch('https://random.dog/woof.json')
//                 const json = await responce.json()
                const responce1 = await fetch('https://dog.ceo/api/breeds/image/random')
                const json1 = await responce1.json()
                console.log("i got the img!!!!!!!!!");
//                 if(checkURL(json.url)){
//                     imgs.push(loadImage(json.url));
//                     ok = true
//                 }else{
//                     ok = false
//                 }
                if(checkURL(json1.url)){
                    imgs.push(loadImage(json1.url));
                    ok = true
                    img1 = floor(random(imgs.length));
                }else{
                    ok = false
                }
                
                
                //return img1
            }
