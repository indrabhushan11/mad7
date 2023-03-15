if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('/user.html')
    .then((Event)=> {console.log(Event)})
    .catch((Error)=>{console.log(Error)});
}
else
{
    console.log("service worker is not registered");
}
