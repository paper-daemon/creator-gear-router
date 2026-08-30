const assert=require('node:assert/strict');

function boot(){
  delete require.cache[require.resolve('../app.js')];
  global.window={AFFILIATE_OFFERS:[]};
  global.localStorage={getItem:()=>null,setItem:()=>{}};
  global.work={value:'meeting'};
  global.pain={value:'audio'};
  global.budget={value:'low'};
  global.route={innerHTML:''};
  global.offers={innerHTML:''};
  global.result={hidden:true};
  global.document={querySelector:()=>({})};
  return require('../app.js');
}

const {score}=boot();

assert.deepEqual(
  score('stream','light','flex'),
  ['light','mic','stand','storage'],
  'pain category should be first without duplicating an existing plan item'
);

assert.deepEqual(
  score('mobile','audio','low'),
  ['mic','power','storage'],
  'low budget should keep the pain category first and cap the route at three items'
);

assert.deepEqual(
  score('product','stable','flex'),
  ['stand','light','backdrop','storage'],
  'stable pain should prioritize the stand category before the product plan'
);

console.log('3 routing assertions PASS');
