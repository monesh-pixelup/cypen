import Link from 'next/link';
import Head from 'next/head';



const scramble = `
(function(){
 var REDUCE=matchMedia('(prefers-reduced-motion: reduce)').matches;
 var el=document.getElementById('nf404');
 if(!el||REDUCE)return;
 var t=el.textContent,GL='abcdefghknopqrstuvxyz0123456789|*<>[]{}/+',pick=function(){return GL[Math.random()*GL.length|0]};
 el.setAttribute('aria-label',t);
 [...el.children].forEach(function(c,i){
  var target=c.dataset.c,id;
  setTimeout(function(){
   c.classList.add('hot');
   id=setInterval(function(){c.textContent=pick()},60);
   setTimeout(function(){clearInterval(id);c.textContent=target;c.classList.replace('hot','done')},420+Math.random()*160);
  },160+i*260);
 });
})();
`;

export default function NotFound() {
  return (
    <>
      <Head><title>Page not found · Cypen</title><meta name="description" content="The page you were looking for does not exist."/></Head>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="navbar"><nav className="nav" aria-label="Main">
        <Link className="logo" href="/#top"><img src="/cypen-assets/logo-mark.svg" alt="" />Cypen</Link>
        <div className="links">
          <Link href="/#problem">PROBLEM</Link><img src="/cypen-assets/plus-violet.svg" alt="" />
          <Link href="/#solution">SOLUTION</Link><img src="/cypen-assets/plus-violet.svg" alt="" />
          <Link href="/#waitlist">JOIN WAITLIST</Link>
        </div>
      </nav></div>

      <main>
        <img className="tex" src="/cypen-assets/problem-tex.webp" alt="" aria-hidden="true" />
        <img className="plus p1" src="/cypen-assets/plus-violet.svg" alt="" aria-hidden="true" />
        <img className="plus p2" src="/cypen-assets/plus-violet.svg" alt="" aria-hidden="true" />
        <div className="card">
          <div className="label"><span>404</span></div>
          <h1 id="nf404">
            <span data-c="4">4</span><span data-c="0">0</span><span data-c="4">4</span>
          </h1>
          <p>Page not found. The path you requested does not exist on this site.</p>
          <a className="btn" href="/#top">Back to top</a>
        </div>
      </main>
      <script dangerouslySetInnerHTML={{ __html: scramble }} />
    </>
  );
}

const css = `
@font-face{font-family:'Roobert';src:url(/cypen-assets/fonts/Roobert-Regular.otf) format('opentype');font-weight:400;font-display:swap}
@font-face{font-family:'Paper Mono';src:url(/cypen-assets/fonts/PaperMono-Regular.otf) format('opentype');font-weight:400;font-display:swap}
@font-face{font-family:'Paper Mono';src:url(/cypen-assets/fonts/PaperMono-Medium.otf) format('opentype');font-weight:500;font-display:swap}
@font-face{font-family:'Season Sans';src:url(/cypen-assets/fonts/SeasonSans-SemiBold.ttf) format('truetype');font-weight:600;font-display:swap}
:root{--lilac:#dbabf2;--violet:#ad78d7;--purple:#8320c5;--mono:'Paper Mono','Geist Mono',ui-monospace,monospace;--display:'Roobert','Geist',system-ui,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#111;color:#f7f7f7;font-family:Geist,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
img{display:block}

.navbar{position:fixed;top:0;left:0;right:0;z-index:50;background:#111;box-shadow:0 1px 0 rgba(255,255,255,.06)}
.nav{max-width:1440px;height:61px;margin:0 auto;padding:0 40px;display:flex;justify-content:space-between;align-items:center}
.logo{display:flex;align-items:center;gap:4.48px;font:400 26.25px/1.2 var(--display);letter-spacing:-.525px;color:#fff}
.logo img{width:22.63px;height:22.45px}
.links{display:flex;align-items:center;gap:26px}
.links a{font:400 12px/1.2 var(--mono);letter-spacing:-.24px;color:rgba(255,255,255,.8);transition:color .2s}
.links a:hover{color:#fff}
.links img{width:9.52px;height:10px}

main{position:relative;min-height:100vh;display:grid;place-items:center;overflow:hidden;text-align:center}
.tex{position:absolute;inset:-10%;width:120%;height:120%;object-fit:cover;opacity:.05;pointer-events:none}
.plus{position:absolute;width:18px;height:19px;opacity:.7}
.p1{left:8vw;top:22vh}.p2{right:10vw;bottom:18vh}
.card{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:24px;padding:0 24px}
.label{background:rgba(255,255,255,.1);font:500 14px/17px var(--mono);text-transform:uppercase;letter-spacing:1.82px;padding:2px 3.2px 2px 5px;color:rgba(255,255,255,.7)}
h1{font-family:var(--display);font-weight:400;font-size:clamp(120px,26vw,224px);line-height:1;letter-spacing:-4.48px;color:#f7f7f7}
h1 span{display:inline-block}
h1 span.hot{color:var(--lilac);text-shadow:0 0 .32em var(--purple),0 0 .08em var(--lilac)}
h1 span.done{color:inherit;text-shadow:0 0 0 transparent}
p{font:400 16px/24px var(--mono);color:rgba(255,255,255,.6);max-width:420px}

.btn{position:relative;width:230px;height:32px;border:0;border-radius:0;background:#b182c2;color:var(--purple);overflow:hidden;
 font:600 20px/32px 'Season Sans','Geist',sans-serif;letter-spacing:-.4px;text-transform:uppercase;text-align:left;
 padding:0 0 0 18.68px;cursor:pointer;white-space:nowrap;transition:background .2s,color .2s;display:inline-block}
.btn:before{content:"";position:absolute;left:0;top:0;bottom:0;width:5.98px;background:#b1b1b1;transition:background .2s}
.btn:hover{background:var(--purple);color:var(--lilac)}
.btn:hover:before{background:#fff}
.btn:focus-visible{outline:2px solid var(--lilac);outline-offset:4px}

@media(max-width:639px){
 .nav{padding:0 16px}
 .links a:not(:last-child),.links img{display:none}
 h1{letter-spacing:-2.4px}
}
@media(prefers-reduced-motion:reduce){h1 span{color:inherit!important;text-shadow:none!important}}
`;
