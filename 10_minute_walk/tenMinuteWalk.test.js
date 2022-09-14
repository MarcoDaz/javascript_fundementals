const ten_minute_walk = require('./tenMinuteWalk');

describe('ten_minute_walk', () => {
  it('returns true for valid walks', () => {
    const walk = ['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'];
    expect(ten_minute_walk(walk)).toEqual(true);
  });

  it('returns false for walks that do not return to the original spot', () => {
    walk1 = ['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w'];
    walk2 = ['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n'];
    
    expect(ten_minute_walk(walk1)).toEqual(false);
    expect(ten_minute_walk(walk2)).toEqual(false);
  });

  it('returns false for walks less than 10 minutes', () => {
    expect(ten_minute_walk(['n', 's'])).toEqual(false);
  });
});