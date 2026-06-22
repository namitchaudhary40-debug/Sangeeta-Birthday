const app=document.getElementById('app');let p=0,c=0;
const msg=`My dear baby,

Wishing you a very happy birthday, jaan! ❤️ I love you so, so much. All I want is for you to always be happy and to get all the happiness in the world.

I don't know what destiny has planned for us. I've prayed for you every day and asked God only for you. Whatever is written in our destiny will happen.

But I promise I will always be by your side.

Happy Birthday once again, Sangeeta. I love you forever. ❤️`;
function r(){
if(p==0)app.innerHTML='<div class=big>🕯️</div><h2>Do you want to blow the candle?</h2><button onclick="p=1;r()">Yes</button><button>No</button>';
if(p==1)app.innerHTML='<div class=big>🌹💐</div><h2>Will you accept these flowers?</h2><button onclick="p=2;r()">Accept</button>';
if(p==2)app.innerHTML='<h2>Tap all 4 heart balloons</h2><div>'+[1,2,3,4].map(i=>`<span class=balloon onclick="pop(this)">🎈❤️</span>`).join('')+'</div>';
if(p==3)app.innerHTML='<h1>🎉 Happy Birthday, Sangeeta! 🎉</h1><button onclick="p=4;r()">Proceed</button>';
if(p==4)app.innerHTML='<h1>❤️ I Love You, Sangeeta ❤️</h1><button onclick="p=5;r()">Proceed Further</button>';
if(p==5)app.innerHTML='<h2>Birthday Message</h2><pre style="white-space:pre-wrap">'+msg+'</pre>';
}
function pop(e){e.textContent='💥';c++;if(c==4){setTimeout(()=>{p=3;r()},500)}}
r();