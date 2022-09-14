const ten_minute_walk = (walk) => {
  const exactly_ten_minutes = walk.length === 10;

  let vertical_motion = 0;
  let horizontal_motion = 0;
  walk.forEach(direction => {
    switch (direction) {
      case 'n':
        vertical_motion++;
        break;
      case 's':
        vertical_motion--;
        break;
      case 'e':
        horizontal_motion++;
        break;
      case 'w':
        horizontal_motion--;
        break;
    };
  });
  const at_starting_point =
    vertical_motion === 0 &&
    horizontal_motion === 0;

  return exactly_ten_minutes && at_starting_point;
};

module.exports = ten_minute_walk;