/**
 * @typedef Pattern
 *   Pattern.
 * @property {ReadonlyArray<string>} replace
 *   Suggestions.
 * @property {true} [omit=false]
 *   Removing the phrase is also an option (default: `false`).
 */

/**
 * @type {Readonly<Record<string, Readonly<Pattern>>>}
 *   Patterns.
 */
export const patterns = {
  'a number of': {
    replace: ['many', 'some']
  },
  abundance: {
    replace: ['enough', 'plenty']
  },
  'accede to': {
    replace: ['agree to', 'allow']
  },
  accelerate: {
    replace: ['speed up']
  },
  accentuate: {
    replace: ['stress']
  },
  accompany: {
    replace: ['go with', 'with']
  },
  accomplish: {
    replace: ['carry out', 'do']
  },
  accorded: {
    replace: ['given']
  },
  accordingly: {
    replace: ['so']
  },
  accrue: {
    replace: ['add', 'gain']
  },
  accurate: {
    replace: ['correct', 'exact', 'right']
  },
  acquiesce: {
    replace: ['agree']
  },
  acquire: {
    replace: ['get']
  },
  additional: {
    replace: ['added', 'extra', 'more', 'other']
  },
  address: {
    replace: ['discuss']
  },
  addressees: {
    replace: ['you']
  },
  'addressees are requested': {
    omit: true,
    replace: ['please']
  },
  'adjacent to': {
    replace: ['next to']
  },
  adjustment: {
    replace: ['change']
  },
  admissible: {
    replace: ['accepted', 'allowed']
  },
  advantageous: {
    replace: ['helpful']
  },
  'adversely impact': {
    replace: ['hurt']
  },
  'adversely impact on': {
    replace: ['hurt', 'set back']
  },
  advise: {
    replace: ['recommend', 'tell']
  },
  'afford an opportunity': {
    replace: ['allow', 'let']
  },
  aforementioned: {
    replace: ['remove']
  },
  aggregate: {
    replace: ['add', 'total']
  },
  aircraft: {
    replace: ['plane']
  },
  'all of': {
    replace: ['all']
  },
  alleviate: {
    replace: ['ease', 'reduce']
  },
  allocate: {
    replace: ['divide']
  },
  'along the lines of': {
    replace: ['as in', 'like']
  },
  'already existing': {
    replace: ['existing']
  },
  alternatively: {
    replace: ['or']
  },
  ameliorate: {
    replace: ['help', 'improve']
  },
  'and/or': {
    replace: ['… or … or both']
  },
  anticipate: {
    replace: ['expect']
  },
  apparent: {
    replace: ['clear', 'plain']
  },
  appreciable: {
    replace: ['many']
  },
  appropriate: {
    omit: true,
    replace: ['proper', 'right']
  },
  approximate: {
    replace: ['about']
  },
  'arrive onboard': {
    replace: ['arrive']
  },
  'as a means of': {
    replace: ['to']
  },
  'as of yet': {
    replace: ['yet']
  },
  'as prescribed by': {
    replace: ['in']
  },
  'as to': {
    replace: ['about', 'on']
  },
  'as yet': {
    replace: ['yet']
  },
  ascertain: {
    replace: ['find out', 'learn']
  },
  assist: {
    replace: ['aid', 'help']
  },
  assistance: {
    replace: ['aid', 'help']
  },
  'at the present time': {
    replace: ['at present']
  },
  'at this time': {
    replace: ['now']
  },
  attain: {
    replace: ['meet']
  },
  attempt: {
    replace: ['try']
  },
  'attributable to': {
    replace: ['because']
  },
  authorise: {
    replace: ['allow', 'let']
  },
  authorize: {
    replace: ['allow', 'let']
  },
  'be advised': {
    omit: true,
    replace: []
  },
  'because of the fact that': {
    replace: ['because']
  },
  belated: {
    replace: ['late']
  },
  benefit: {
    replace: ['help']
  },
  'benefit from': {
    replace: ['enjoy']
  },
  bestow: {
    replace: ['award', 'give']
  },
  'by means of': {
    replace: ['by', 'with']
  },
  'by virtue of': {
    replace: ['by', 'under']
  },
  capability: {
    replace: ['ability']
  },
  caveat: {
    replace: ['warning']
  },
  cease: {
    replace: ['stop']
  },
  'close proximity': {
    replace: ['near']
  },
  'combat environment': {
    replace: ['combat']
  },
  combined: {
    replace: ['joint']
  },
  commence: {
    replace: ['begin', 'start']
  },
  'comply with': {
    replace: ['follow']
  },
  component: {
    replace: ['part']
  },
  comprise: {
    replace: ['form', 'include', 'make up']
  },
  concerning: {
    replace: ['about', 'on']
  },
  consequently: {
    replace: ['so']
  },
  consolidate: {
    replace: ['combine', 'join', 'merge']
  },
  constitutes: {
    replace: ['forms', 'is', 'makes up']
  },
  contains: {
    replace: ['has']
  },
  convene: {
    replace: ['meet']
  },
  currently: {
    omit: true,
    replace: ['now']
  },
  deem: {
    replace: ['believe', 'consider', 'think']
  },
  delete: {
    replace: ['cut', 'drop']
  },
  demonstrate: {
    replace: ['prove', 'show']
  },
  depart: {
    replace: ['go', 'leave']
  },
  designate: {
    replace: ['appoint', 'choose', 'name']
  },
  desire: {
    replace: ['want', 'wish']
  },
  determine: {
    replace: ['decide', 'figure', 'find']
  },
  disclose: {
    replace: ['show']
  },
  discontinue: {
    replace: ['drop', 'stop']
  },
  disseminate: {
    replace: ['give', 'issue', 'pass', 'send']
  },
  'due to the fact that': {
    replace: ['because', 'due to', 'since']
  },
  'during the period': {
    replace: ['during']
  },
  'e.g.': {
    replace: ['for example', 'such as']
  },
  'each and every': {
    replace: ['each']
  },
  economical: {
    replace: ['cheap']
  },
  effect: {
    replace: ['choose', 'pick', 'result']
  },
  'effect modifications': {
    replace: ['make changes']
  },
  elect: {
    replace: ['choose']
  },
  eliminate: {
    replace: ['cut', 'drop', 'end', 'stop']
  },
  elucidate: {
    replace: ['explain']
  },
  employ: {
    replace: ['use']
  },
  encounter: {
    replace: ['meet']
  },
  endeavor: {
    replace: ['try']
  },
  ensure: {
    replace: ['make sure']
  },
  enumerate: {
    replace: ['count']
  },
  equipments: {
    replace: ['equipment']
  },
  equitable: {
    replace: ['fair']
  },
  equivalent: {
    replace: ['equal']
  },
  establish: {
    replace: ['set up', 'prove', 'show']
  },
  evaluate: {
    replace: ['check', 'test']
  },
  evidenced: {
    replace: ['showed']
  },
  evident: {
    replace: ['clear']
  },
  exclusively: {
    replace: ['only']
  },
  exhibit: {
    replace: ['show']
  },
  expedite: {
    replace: ['hasten', 'hurry', 'speed up']
  },
  expeditious: {
    replace: ['fast', 'quick']
  },
  expend: {
    replace: ['spend']
  },
  expertise: {
    replace: ['ability']
  },
  expiration: {
    replace: ['end']
  },
  facilitate: {
    replace: ['ease', 'help']
  },
  'factual evidence': {
    replace: ['evidence', 'facts']
  },
  'failed to': {
    replace: ['didn’t']
  },
  feasible: {
    replace: ['can be done', 'workable']
  },
  females: {
    replace: ['women']
  },
  finalise: {
    replace: ['complete', 'finish']
  },
  finalize: {
    replace: ['complete', 'finish']
  },
  'first and foremost': {
    replace: ['first']
  },
  'for a period of': {
    replace: ['for']
  },
  'for the purpose of': {
    replace: ['to']
  },
  forfeit: {
    replace: ['give up', 'lose']
  },
  formulate: {
    replace: ['plan']
  },
  forward: {
    replace: ['send']
  },
  frequently: {
    replace: ['often']
  },
  function: {
    replace: ['act', 'role', 'work']
  },
  furnish: {
    replace: ['give', 'send']
  },
  'has a requirement for': {
    replace: ['needs']
  },
  'has no effect': {
    replace: ['does nothing', 'does not apply']
  },
  herein: {
    replace: ['here']
  },
  heretofore: {
    replace: ['until now']
  },
  herewith: {
    replace: ['here', 'below']
  },
  'honest truth': {
    replace: ['truth']
  },
  however: {
    replace: ['but', 'yet']
  },
  'i.e.': {
    replace: ['as in']
  },
  identical: {
    replace: ['same']
  },
  identify: {
    replace: ['find', 'name', 'show']
  },
  'if and when': {
    replace: ['if', 'when']
  },
  immediately: {
    replace: ['at once']
  },
  impacted: {
    replace: ['affected', 'changed', 'harmed']
  },
  implement: {
    replace: ['carry out', 'install', 'put in place', 'tool', 'start']
  },
  'in a timely manner': {
    replace: ['on time', 'promptly']
  },
  'in accordance with': {
    replace: ['by', 'under', 'following', 'per']
  },
  'in addition': {
    replace: ['also', 'besides', 'too']
  },
  'in all likelihood': {
    replace: ['probably']
  },
  'in an effort to': {
    replace: ['to']
  },
  'in between': {
    replace: ['between']
  },
  'in excess of': {
    replace: ['more than']
  },
  'in lieu of': {
    replace: ['instead']
  },
  'in light of the fact that': {
    replace: ['because']
  },
  'in many cases': {
    replace: ['often']
  },
  'in order that': {
    replace: ['for', 'so']
  },
  'in order to': {
    replace: ['to']
  },
  'in order for': {
    replace: ['for']
  },
  'in regard to': {
    replace: ['about', 'concerning', 'on']
  },
  'in relation to': {
    replace: ['about', 'with', 'to']
  },
  'in some instances': {
    replace: ['sometimes']
  },
  'in terms of': {
    omit: true,
    replace: ['as', 'for', 'with']
  },
  'in the amount of': {
    replace: ['for']
  },
  'in the event of': {
    replace: ['if']
  },
  'in the near future': {
    replace: ['soon', 'shortly']
  },
  'in the process of': {
    omit: true,
    replace: []
  },
  'in view of': {
    replace: ['since']
  },
  'in view of the above': {
    replace: ['so']
  },
  'inasmuch as': {
    replace: ['since']
  },
  inception: {
    replace: ['start']
  },
  'incumbent upon': {
    replace: ['must']
  },
  indicate: {
    replace: ['show', 'say', 'state', 'write down']
  },
  indication: {
    replace: ['sign']
  },
  initial: {
    replace: ['first']
  },
  initiate: {
    replace: ['start']
  },
  'inter alia': {
    omit: true,
    replace: []
  },
  interface: {
    replace: ['meet', 'work with']
  },
  'interpose no objection': {
    replace: ['don’t object']
  },
  'is applicable to': {
    replace: ['applies to']
  },
  'is authorised to': {
    replace: ['may']
  },
  'is authorized to': {
    replace: ['may']
  },
  'is in consonance with': {
    replace: ['agrees with', 'follows']
  },
  'is responsible for': {
    omit: true,
    replace: ['handles']
  },
  'it appears': {
    replace: ['seems']
  },
  'it is': {
    omit: true,
    replace: []
  },
  'it is essential': {
    replace: ['must', 'need to']
  },
  'it is requested': {
    replace: ['please']
  },
  liaison: {
    replace: ['discussion']
  },
  'limited number': {
    replace: ['limits']
  },
  literally: {
    omit: true,
    replace: []
  },
  magnitude: {
    replace: ['size']
  },
  maintain: {
    replace: ['support', 'keep']
  },
  maximum: {
    replace: ['greatest', 'largest', 'most']
  },
  methodology: {
    replace: ['method']
  },
  minimise: {
    replace: ['cut', 'decrease']
  },
  minimize: {
    replace: ['cut', 'decrease']
  },
  minimum: {
    replace: ['least', 'small', 'smallest']
  },
  modify: {
    replace: ['change']
  },
  monitor: {
    replace: ['check', 'track', 'watch']
  },
  multiple: {
    replace: ['many']
  },
  necessitate: {
    replace: ['cause', 'need']
  },
  nevertheless: {
    replace: ['besides', 'even so', 'still']
  },
  'not certain': {
    replace: ['uncertain']
  },
  'not many': {
    replace: ['few']
  },
  'not often': {
    replace: ['rarely']
  },
  'not unless': {
    replace: ['only if']
  },
  'not unlike': {
    replace: ['alike', 'similar']
  },
  notify: {
    replace: ['let know', 'tell']
  },
  'not later than': {
    replace: ['by', 'before']
  },
  notwithstanding: {
    replace: ['despite', 'in spite of', 'still']
  },
  'null and void': {
    replace: ['null', 'void']
  },
  numerous: {
    replace: ['many']
  },
  objective: {
    replace: ['aim', 'goal']
  },
  obligate: {
    replace: ['bind', 'compel']
  },
  observe: {
    replace: ['see']
  },
  obtain: {
    replace: ['get']
  },
  'on the contrary': {
    replace: ['but', 'so']
  },
  'on the other hand': {
    omit: true,
    replace: ['but', 'so']
  },
  'one particular': {
    replace: ['one']
  },
  operate: {
    replace: ['run', 'use', 'work']
  },
  optimum: {
    replace: ['best', 'greatest', 'most']
  },
  option: {
    replace: ['choice']
  },
  overall: {
    omit: true,
    replace: []
  },
  'owing to the fact that': {
    replace: ['because', 'since']
  },
  parameters: {
    replace: ['limits']
  },
  participate: {
    replace: ['take part']
  },
  particulars: {
    replace: ['details']
  },
  'pass away': {
    replace: ['die']
  },
  perform: {
    replace: ['do']
  },
  permit: {
    replace: ['let']
  },
  'pertaining to': {
    replace: ['about', 'of', 'on']
  },
  'point in time': {
    replace: ['moment', 'now', 'point', 'time']
  },
  portion: {
    replace: ['part']
  },
  possess: {
    replace: ['have', 'own']
  },
  practicable: {
    replace: ['practical']
  },
  preclude: {
    replace: ['prevent']
  },
  previous: {
    replace: ['earlier']
  },
  previously: {
    replace: ['before']
  },
  'prior to': {
    replace: ['before']
  },
  prioritise: {
    replace: ['focus on', 'rank']
  },
  prioritize: {
    replace: ['focus on', 'rank']
  },
  proceed: {
    replace: ['do', 'go ahead', 'try']
  },
  procure: {
    omit: true,
    replace: ['buy', 'get']
  },
  proficiency: {
    replace: ['skill']
  },
  promulgate: {
    replace: ['issue', 'publish']
  },
  provide: {
    replace: ['give', 'offer', 'say']
  },
  'provided that': {
    replace: ['if']
  },
  'provides guidance for': {
    replace: ['guides']
  },
  purchase: {
    replace: ['buy', 'sale']
  },
  'pursuant to': {
    replace: ['by', 'following', 'per', 'under']
  },
  'put simply': {
    omit: true,
    replace: []
  },
  'readily apparent': {
    replace: ['clear']
  },
  'refer back': {
    replace: ['refer']
  },
  reflect: {
    replace: ['say', 'show']
  },
  regarding: {
    replace: ['about', 'of', 'on']
  },
  'relative to': {
    replace: ['about', 'on']
  },
  relocate: {
    replace: ['move']
  },
  remain: {
    replace: ['stay']
  },
  remainder: {
    replace: ['rest']
  },
  remuneration: {
    replace: ['pay', 'payment']
  },
  render: {
    replace: ['give', 'make']
  },
  represents: {
    replace: ['is']
  },
  request: {
    replace: ['ask']
  },
  require: {
    replace: ['must', 'need']
  },
  requirement: {
    replace: ['need', 'rule']
  },
  reside: {
    replace: ['live']
  },
  residence: {
    replace: ['house']
  },
  retain: {
    replace: ['keep']
  },
  satisfy: {
    replace: ['meet', 'please']
  },
  selection: {
    replace: ['choice']
  },
  'set forth in': {
    replace: ['in']
  },
  shall: {
    replace: ['must', 'will']
  },
  'should you wish': {
    replace: ['if you want']
  },
  'similar to': {
    replace: ['like']
  },
  solicit: {
    replace: ['ask for', 'request']
  },
  'span across': {
    replace: ['cross', 'span']
  },
  'state-of-the-art': {
    replace: ['latest']
  },
  strategise: {
    replace: ['plan']
  },
  strategize: {
    replace: ['plan']
  },
  submit: {
    replace: ['give', 'send']
  },
  subsequent: {
    replace: ['after', 'later', 'next', 'then']
  },
  subsequently: {
    replace: ['after', 'later', 'then']
  },
  substantial: {
    replace: ['large', 'much']
  },
  'successfully complete': {
    replace: ['complete', 'pass']
  },
  sufficient: {
    replace: ['enough']
  },
  'take action to': {
    omit: true,
    replace: []
  },
  terminate: {
    replace: ['end', 'stop']
  },
  'the month of': {
    omit: true,
    replace: []
  },
  'the undersigned': {
    replace: ['I']
  },
  'the use of': {
    omit: true,
    replace: []
  },
  'there are': {
    omit: true,
    replace: []
  },
  'there is': {
    omit: true,
    replace: []
  },
  therefore: {
    replace: ['so', 'thus']
  },
  thereof: {
    replace: ['its', 'their']
  },
  therein: {
    replace: ['there']
  },
  'this day and age': {
    replace: ['today']
  },
  'time period': {
    replace: ['period', 'time']
  },
  timely: {
    replace: ['prompt']
  },
  'took advantage of': {
    replace: ['preyed on']
  },
  transmit: {
    replace: ['send']
  },
  type: {
    omit: true,
    replace: []
  },
  transpire: {
    replace: ['happen']
  },
  'under the provisions of': {
    replace: ['under']
  },
  'until such time as': {
    replace: ['until']
  },
  utilise: {
    replace: ['use']
  },
  utilisation: {
    replace: ['use']
  },
  utilization: {
    replace: ['use']
  },
  utilize: {
    replace: ['use']
  },
  validate: {
    replace: ['confirm']
  },
  'various different': {
    replace: ['different', 'various']
  },
  very: {
    omit: true,
    replace: []
  },
  viable: {
    replace: ['practical', 'workable']
  },
  vice: {
    replace: ['instead of', 'versus']
  },
  warrant: {
    replace: ['call for', 'permit']
  },
  whereas: {
    replace: ['because', 'since']
  },
  'whether or not': {
    replace: ['whether']
  },
  'with reference to': {
    replace: ['about']
  },
  'with respect to': {
    replace: ['about', 'on']
  },
  'with the exception of': {
    replace: ['except for']
  },
  witnessed: {
    replace: ['saw', 'seen']
  },
  'your office': {
    replace: ['you']
  }
}
