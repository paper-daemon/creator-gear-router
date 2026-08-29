const catalog={
 mic:{name:'マイク / 音声入力',why:'声の明瞭さを先に改善。用途に合わない高価な映像機材より効果が出やすい場面があります。'},
 light:{name:'照明',why:'カメラを買い替える前に、光量・方向・色の安定を確認。'},
 stand:{name:'スタンド / 三脚',why:'固定と再現性を作る土台。机・床・持ち運びで必要な形が変わります。'},
 storage:{name:'ストレージ / バックアップ',why:'収録後に詰まらないよう、容量・転送速度・複製先を先に決めます。'},
 headphones:{name:'モニター用イヤホン / ヘッドホン',why:'録音中のノイズや音量差を早めに発見しやすくします。'},
 power:{name:'電源 / 充電',why:'外作業では性能より先に稼働時間がボトルネックになることがあります。'},
 backdrop:{name:'背景 / 撮影面',why:'商品撮影は背景と光の再現性で見え方が大きく変わります。'}
};
const plans={meeting:['mic','headphones','stand'],stream:['mic','light','stand','storage'],product:['light','stand','backdrop','storage'],mobile:['power','storage','stand','mic']};
const painMap={audio:'mic',light:'light',stable:'stand',storage:'storage'};
function unique(xs){return [...new Set(xs)]}
function score(work,pain,budget){let xs=unique([painMap[pain],...plans[work]]);if(budget==='low')xs=xs.slice(0,3);return xs}
function offersFor(key){return (window.AFFILIATE_OFFERS||[]).filter(x=>x.enabled&&x.category===key)}
document.querySelector('#run').onclick=()=>{const w=work.value,p=pain.value,b=budget.value;const xs=score(w,p,b);route.innerHTML=xs.map((k,i)=>`<article class="card"><span class="rank">0${i+1}</span><h3>${catalog[k].name}</h3><p>${catalog[k].why}</p></article>`).join('');const ads=xs.flatMap(k=>offersFor(k));offers.innerHTML=ads.length?'<h2>関連候補</h2>'+ads.map(x=>`<article class="card"><a href="${x.url}" rel="sponsored nofollow noopener" target="_blank">${x.label}</a><span class="ad">広告</span><p>${x.note||''}</p></article>`).join(''):'';result.hidden=false;localStorage.setItem('amase_usage_creator_gear_router',String((Number(localStorage.getItem('amase_usage_creator_gear_router'))||0)+1));};
