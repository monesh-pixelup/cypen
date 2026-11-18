import Link from 'next/link';
import Head from 'next/head';

export const css = `
@font-face{font-family:'Roobert';src:url(/cypen-assets/fonts/Roobert-Regular.otf) format('opentype');font-weight:400;font-display:swap}
@font-face{font-family:'Paper Mono';src:url(/cypen-assets/fonts/PaperMono-Regular.otf) format('opentype');font-weight:400;font-display:swap}
@font-face{font-family:'Paper Mono';src:url(/cypen-assets/fonts/PaperMono-Medium.otf) format('opentype');font-weight:500;font-display:swap}
:root{--lilac:#dbabf2;--violet:#ad78d7;--purple:#8320c5;--mute:rgba(255,255,255,.6);--mono:'Paper Mono','Geist Mono',ui-monospace,monospace;--display:'Roobert','Geist',system-ui,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}
html{background:#111}
body{background:#111;color:#f7f7f7;font-family:Geist,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
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
main.legal{max-width:820px;margin:0 auto;padding:140px 24px 96px}
.label{display:inline-block;background:rgba(255,255,255,.1);font:500 14px/17px var(--mono);text-transform:uppercase;letter-spacing:1.82px;padding:2px 3.2px 2px 5px;color:rgba(255,255,255,.7);margin-bottom:28px}
h1{font-family:var(--display);font-weight:400;font-size:clamp(38px,6vw,56px);line-height:1.1;letter-spacing:-1.12px;color:#fff}
.effective{margin-top:16px;font:400 16px/24px var(--mono);color:var(--mute)}
.intro{margin-top:28px;font:400 17px/28px Geist,sans-serif;color:var(--mute)}
article{margin-top:56px;display:flex;flex-direction:column;gap:44px}
h2{font-family:var(--display);font-weight:400;font-size:24px;line-height:1.2;letter-spacing:-.48px;color:#fff;margin-bottom:14px}
h3{font-family:var(--display);font-weight:400;font-size:18px;line-height:1.3;color:#fff;margin-top:26px}
p,li{font:400 16px/26px Geist,sans-serif;color:var(--mute)}
ul{list-style:none;margin-top:12px;display:flex;flex-direction:column;gap:10px}
li{position:relative;padding-left:22px}
li:before{content:"";position:absolute;left:0;top:11px;width:9.52px;height:10px;background:url(/cypen-assets/plus-violet.svg) 0 0/100% 100%}
strong{color:rgba(255,255,255,.85);font-weight:600}
a.inline{color:var(--lilac);background:linear-gradient(currentColor,currentColor) 0 100%/100% 1px no-repeat;background-size:0 1px;transition:background-size .2s}
a.inline:hover{background-size:100% 1px}
.back{display:inline-block;margin-top:64px;font:400 12px/1.2 var(--mono);letter-spacing:-.24px;color:rgba(255,255,255,.8);transition:color .2s}
.back:hover{color:#fff}
@media(max-width:639px){
 .nav{padding:0 16px}
 .links a:not(:last-child),.links img{display:none}
 main.legal{padding-top:110px}
}
`;

export function LegalShell({ eyebrow, title, effective, intro, children }) {
  return (
    <>
      <Head><meta name="viewport" content="width=device-width,initial-scale=1" /></Head>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="navbar"><nav className="nav" aria-label="Main">
        <Link className="logo" href="/#top"><img src="/cypen-assets/logo-mark.svg" alt="" />Cypen</Link>
        <div className="links">
          <Link href="/#problem">PROBLEM</Link><img src="/cypen-assets/plus-violet.svg" alt="" />
          <Link href="/#solution">SOLUTION</Link><img src="/cypen-assets/plus-violet.svg" alt="" />
          <Link href="/#waitlist">JOIN WAITLIST</Link>
        </div>
      </nav></div>
      <main className="legal">
        <span className="label">{eyebrow}</span>
        <h1>{title}</h1>
        {effective ? <p className="effective">Effective date: {effective}</p> : null}
        {intro ? <p className="intro">{intro}</p> : null}
        <article>{children}</article>
        <Link className="back" href="/#top">&larr; BACK TO TOP</Link>
      </main>
    </>
  );
}
