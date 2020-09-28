const { MarkovMachine } = require('./markov');

describe('Markov machine tests', () => {

  it('should return the word chains', () => {
    let mm = new MarkovMachine('the cat in the hat');
    expect(mm.chains).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]});
  });

})