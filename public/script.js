

const socket = io('/')

const videoGrid = document.getElementById('video-grid')

const myVideo = document.createElement('video');
myVideo.muted = true;
const peer = new Peer();

let myVideoStream
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream)
    peer.on('call', call => {
        call.answer(stream)
        const video = document.createElement('video')
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream)
        })
    })

    socket.on('user-connected', (userId) => {
        connectToNewUser(userId, stream);
    })
    let text = $('input')

$('html').keydown((e) => {
    if (e.which == 13 && text.val().length !== 0) {
      
        socket.emit('message', text.val());
        text.val('')
    }
})

socket.on('createMessage', message =>{
    console.log("create message", message)
   $('ul').append(`<li class="message"><b>user</b><br/>${message}</li>`)
scrollToBottom()
})
})
peer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id)
})



const connectToNewUser = (userId, stream) => {
    const call = peer.call(userId, stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
    })
}


const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();


    })
    videoGrid.append(video);
}
const scrollToBottom = () =>{
    let d=$('.chat_window');
    d.scrollTop(d.prop("scrollHeight"))
}
const muteUnmute=()=>{
    const enabled=myVideoStream.getAudioTracks()[0].enabled;
    if(enabled){
        myVideoStream.getAudioTracks()[0].enabled=false;
        setUnmuteButton();

    }
    else{
        setMuteButton();
        myVideoStream.getAudioTracks()[0].enabled=true;
    }
}
const setMuteButton=()=>{
    const html=`<i class="fas fa-microphone"></i>
  
    `
    document.querySelector('.main_mute_button').innerHTML=html;
}
const setUnmuteButton=()=>{
    const html=`<i class="unmute fas fa-microphone-slash"></i>
  
    `
    document.querySelector('.main_mute_button').innerHTML=html;
}

const playStop=()=>{
    console.log('object')
    let enabled=myVideoStream.getVideoTracks()[0].enabled;
    if(enabled){
        myVideoStream.getVideoTracks()[0].enabled=false;
        setPlayVideo()

    }else{
        setStopVideo()
        myVideoStream.getVideoTracks()[0].enabled=true;

    }
}

const setStopVideo=()=>{
    const html=`<i class="fas fa-video"></>
   
    `
    document.querySelector('.main_video_button').innerHTML=html;
}
const setPlayVideo=()=>{
    const html=`<i class="stop fas fa-video-slash"></>
    
    `
    document.querySelector('.main_video_button').innerHTML=html;
}

let check=0
const toggleChat=()=>{
  if(!check){
    document.getElementById("chats").style.display="flex";
    check=1;
  }
  else{
    document.getElementById("chats").style.display="none";
    check=0;
  }
}


 
   


