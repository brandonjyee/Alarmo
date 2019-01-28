const router = require('express').Router();
const { Alarm } = require('../db/models');
const axios = require('axios');

module.exports = router;

// Test this route by going to: localhost:[PORT]/api/alarms
router.get('/', async (req, res, next) => {
  try {
    // TODO: retrieve by most recent
    const alarms = await Alarm.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json(alarms);
  } catch (err) {
    next(err);
  }
});

// TODO
router.post('/', async (req, res, next) => {
  try {
    /* Persist to the db then asynchronously push to http service https://bellbird.joinhandshake-internal.com/push
    Send JSON data w/ format { alarm_id: 1234 }
    */
    console.log('in post');
    const { title, msg } = req.body;
    console.log('received:', title, msg);
    const created = await Alarm.create(
      {
        title,
        msg: msg.toUpperCase(),
      },
      { returning: true }
    );
    console.log('created alarm in db:', created);
    console.log('Sending to service');
    await axios.post('https://bellbird.joinhandshake-internal.com/push', {
      alarm_id: created.id,
    });
    console.log('sent to notification service');
  } catch (err) {
    next(err);
  }
});

router.post('/:alarmId/vote', async (req, res, next) => {
  try {
    const { alarmId } = req.params;
    const { voteDir } = req.query;
    console.log('upvoted on alarmId:');
    const alarm = await Alarm.findOne({
      where: {
        id: alarmId,
      },
    });
    if (!alarm) throw new Error('Invalid alarmId: ' + alarmId);

    let newVotesCount = alarm.upvotes
    if (voteDir && voteDir === 'down') {
      newVotesCount--
    } else {
      newVotesCount++
    }

    await Alarm.update(
      {
        upvotes: newVotesCount,
      },
      {
        where: {
          id: alarm.id
        },
      }
    );
    console.log('updated upvotes')
  } catch (err) {
    next(err);
  }
});
