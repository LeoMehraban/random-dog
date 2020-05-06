
            async function getDogImg(){
                const responce = await fetch('https://random.dog/woof.json')
                const json = await responce.json()
                const responce1 = await fetch('https://dog.ceo/api/breeds/image/random')
                const json1 = await responce1.json()
                console.log("i got the img!!!!!!!!!");
                if(checkURL(json.url)){
                    img1 = loadImage(json.url);
                    ok = true
                }else{
                    ok = false
                }
            }
