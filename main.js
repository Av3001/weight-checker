const planetvalue=document.querySelector('#planet')
const btn = document.getElementsByClassName('btn')
const weight=document.getElementById('weight')
var factor={
    'Earth':1,
    'Mercury':0.38,
    'Venus':0.91,
    'Mars':.38,
    'Jupiter':2.34,
    'Saturn':1.06,
    'Neptune':1.19,
    'Uranus':0.92,
    'Pluto':0.06,
    'Moon':0.166
}
images={
    'Earth':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvU7Y7L0uVqZOnAAlAlwvayN_iefBB_obAKA&usqp=CAU',
    'Mercury':'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/mercury_2.jpg?VersionId=l15tc8t4WEfbKMdnSLQm3UCtHa8yz42M&size=690:388',
    'Venus':'https://media.wired.com/photos/5e59ad2b79c7100008eb6ae8/1:1/w_2000,h_2000,c_limit/photo_space_venus_1_S91-50688.jpg',
    'Mars':'https://cdn.mos.cms.futurecdn.net/L868HCTDT8ueAXXrcyXoWc.jpg',
    'Jupiter':'https://i.natgeofe.com/k/7c7e4173-5ad3-4ef7-8252-354de21430db/jupiter_square.jpg',
    'Saturn':'https://media.istockphoto.com/id/1304001382/photo/saturn-planet-gas-giant-3d-illustration-big-planet-with-ring.webp?b=1&s=170667a&w=0&k=20&c=AkQgWW1Zcw-U-3vV1_KyQvcXHrasvmdv75JmyVwez8Y=',
    'Neptune':'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVwdHVuZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    'Uranus':'https://media.istockphoto.com/id/1199283538/photo/planet-uranus.jpg?s=612x612&w=0&k=20&c=ywhCXwqp1G17DDGvSN4FoFHcBr24W__TjulMRju4ZWk=',
    'Pluto':'https://cdn.mos.cms.futurecdn.net/DoZSMXF87kCuzbymsuEFHo.jpg',
    'Moon':'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg'
}
function calcweight(){
    
    alert(`Your weight on ${planetvalue.value} is ${weight.value*factor[planetvalue.value]}`)
    link=images[`${planetvalue.value}`]
    document.body.style.backgroundImage = `url(${link})` ;
    // console.log();
    
}