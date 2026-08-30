const assert=require('node:assert/strict');

function boot(storage){
  delete require.cache[require.resolve('../app.js')];
  global.window={AFFILIATE_OFFERS:[]};
  global.localStorage=storage;
  global.work={value:'meeting'};
  global.pain={value:'audio'};
  global.budget={value:'low'};
  global.route={innerHTML:''};
  global.offers={innerHTML:''};
  global.result={hidden:true};
  const run={};
  global.document={querySelector:selector=>selector==='#run'?run:null};
  const api=require('../app.js');
  return {run,api};
}

let state='0';
let app=boot({getItem:()=>state,setItem:(key,value)=>{state=String(value)}});
assert.doesNotThrow(()=>app.run.onclick());
assert.equal(state,'1');
assert.equal(result.hidden,false);

app=boot({
  getItem(){throw new Error('blocked')},
  setItem(){throw new Error('blocked')}
});
assert.doesNotThrow(()=>app.run.onclick());
assert.equal(result.hidden,false);
assert.equal(app.api.recordUsage(),false);

console.log('6 assertions PASS: storage failure does not break routing');
