const express = require('express');
const router = express.Router();

router.get('/getTextWidgetunused', (req, res) => {
  const data = {
    title: 'unused',
    types: 'Number',
    data: {
      percentage: '+8',
      value: '408',
      status: false,
    },
  };
  res.json(data);
});

router.get('/getTextWidgetbadname', (req, res) => {
  const data = {
    title: 'badname',
    types: 'Number',
    data: {
      percentage: '-12',
      value: '259',
      status: true,
    },
  };
  res.json(data);
});

router.get('/getTextWidgetduplicate', (req, res) => {
  const data = {
    title: 'duplicate',
    types: 'Number',
    data: {
      percentage: '+19',
      value: '124',
      status: false,
    },
  };
  res.json(data);
});

router.get('/getTextWidgetheavy', (req, res) => {
  const data = {
    title: 'heavy',
    types: 'Number',
    data: {
      percentage: '-5',
      value: '86',
      status: true,
    },
  };
  res.json(data);
});

router.get('/getTextWidgetstorage', (req, res) => {
  const data = {
    title: 'storage',
    types: 'Graph',
    data: {
      percentage: '+4',
      value: "237/512GB",
      valuePercentage: "28.32",
      status: false,
    },
  };
  res.json(data);
});

router.get('/getGradeWidget', (req, res) => {
  const data = {
    grade: "B",
  };
  res.json(data);
});

router.get('/getGraphWidget', (req, res) => {
  const data = {
    series: [20, 32, 23, 15, 10],
  };
  res.json(data);
});

router.get('/getWidgetOverView', (req, res) => {
  var data = [
      {
          StatusCode: 200,
          Content: JSON.stringify([{
            pretty_path: "src/my_files.rs",
            size: 21782,
            last_modified: {
                secs_since_epoch: 1706651511,
                nanos_since_epoch: 396799014
            },
            tidy_score: {
                misnamed: true,
                heavy: true,
                unused: false,
                duplicated: false
            }
          },
          {
            pretty_path: "src/http_server.rs",
            size: 5452,
            last_modified: {
                secs_since_epoch: 15651511,
                nanos_since_epoch: 456898
            },
            tidy_score: {
                misnamed: true,
                heavy: true,
                unused: false,
                duplicated: false
            }
          },
          {
            pretty_path: "src/lib.rs",
            size: 2406,
            last_modified: {
                secs_since_epoch: 511,
                nanos_since_epoch: 96799
            },
            tidy_score: {
                misnamed: true,
                heavy: false,
                unused: true,
                duplicated: true
            }
          },
          {
            pretty_path: "src/awesome_code.rs",
            size: 54321,
            last_modified: {
                secs_since_epoch: 1701511,
                nanos_since_epoch: 9679914
            },
            tidy_score: {
                misnamed: false,
                heavy: true,
                unused: true,
                duplicated: false
            }
          },
          {
            pretty_path: "src/cool_module.rs",
            size: 9876,
            last_modified: {
                secs_since_epoch: 170113511,
                nanos_since_epoch: 963479914
            },
            tidy_score: {
                misnamed: true,
                heavy: false,
                unused: true,
                duplicated: false
            }
          },
          {
            pretty_path: "src/smart_logic.rs",
            size: 3456,
            last_modified: {
                secs_since_epoch: 651511,
                nanos_since_epoch: 396799014
            },
            tidy_score: {
                misnamed: false,
                heavy: true,
                unused: false,
                duplicated: true
            }
          },])
      },
      {
          StatusCode: 200,
          Content: JSON.stringify([    {
            pretty_path: "src/innovative_code.rs",
            size: 65432,
            last_modified: {
                secs_since_epoch: 6651511,
                nanos_since_epoch: 39138765
            },
            tidy_score: {
                misnamed: false,
                heavy: true,
                unused: true,
                duplicated: false
            }
          },
          {
            pretty_path: "src/innovative_code.rs",
            size: 65432,
            last_modified: {
                secs_since_epoch: 6651511,
                nanos_since_epoch: 39138765
            },
            tidy_score: {
                misnamed: false,
                heavy: true,
                unused: true,
                duplicated: false
            }
          },
          {
            pretty_path: "src/creative_solution.rs",
            size: 52,
            last_modified: {
                secs_since_epoch: 66,
                nanos_since_epoch: 325
            },
            tidy_score: {
                misnamed: true,
                heavy: true,
                unused: true,
                duplicated: true
            }
          },
          {
            pretty_path: "src/efficient_algorithm.rs",
            size: 8765,
            last_modified: {
                secs_since_epoch: 17066515,
                nanos_since_epoch: 3967990
            },
            tidy_score: {
                misnamed: false,
                heavy: true,
                unused: false,
                duplicated: true
            }
          },
          {
            pretty_path: "src/user_friendly.rs",
            size: 9876,
            last_modified: {
                secs_since_epoch: 17987615,
                nanos_since_epoch: 399876
            },
            tidy_score: {
                misnamed: true,
                heavy: false,
                unused: false,
                duplicated: false
            }
          },
          {
            pretty_path: "src/feature_rich.rs",
            size: 7654,
            last_modified: {
                secs_since_epoch: 6651511,
                nanos_since_epoch: 6799014
            },
            tidy_score: {
                misnamed: false,
                heavy: true,
                unused: true,
                duplicated: false
            }
          },])    
      }
  ];
  res.json(data);
});


module.exports = router;
