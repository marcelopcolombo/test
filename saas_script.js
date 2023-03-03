console.log('|||||||||| worked! ||||||||||')
function init () {
    console.log('|||||||||| init! ||||||||||')
    let doc = document;
    const linkCss = document.createElement('link');
    linkCss.rel  = 'stylesheet';
    linkCss.type = 'text/css';
    linkCss.href = 'https://test-omega-steel-28.vercel.app/saas_styles.css';
    linkCss.media = 'all';
    document.head.appendChild(linkCss);

    let divVideoWrapper = document.createElement('div');
    divVideoWrapper.classList.add("video-wrapper");
    divVideoWrapper.addEventListener("click", () => {
        console.log('|||||||||| startIframe! ||||||||||')
        divVideoWrapper.className = 'display-none';;
        
        let iframe = document.createElement('iframe');
        iframe.src = 'https://test-omega-steel-28.vercel.app';
        iframe.id = 'saasVideo';
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('autoplay', 'true');
        iframe.setAttribute('loop', 'true');
        iframe.setAttribute('width', '400px');
        iframe.setAttribute('height', '710px');
        iframe.setAttribute('frameBorder', '0');
        doc.body.appendChild(iframe);
    });
    document.body.appendChild(divVideoWrapper);

    let video = document.createElement('video');
    video.src = 'https://test-omega-steel-28.vercel.app/videotest.mp4';
    video.id = 'saasVideo';
    video.muted = true;
    video.playsinline = true;
    video.setAttribute('webkit-playsinline', 'webkit-playsinline');
    video.setAttribute('allow', 'autoplay');
    video.setAttribute('autoplay', 'true');
    video.setAttribute('loop', 'true');
    video.setAttribute('width', '200px');
    video.setAttribute('height', '305px');
    divVideoWrapper.appendChild(video);
    

}

init();
//https://developer.chrome.com/blog/autoplay/