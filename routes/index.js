
var express = require('express');
var router = express.Router();
var path = require('path');
var query = require('./query.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index3.html'));
});

router.get('/filings', function(req,res){
  query( 'SELECT * FROM Filing', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/categories1', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=1', function(jsonData){
    if (!res.headersSent) {
        res.send(jsonData);
    }
  });
});

router.get('/categories2', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=2', function(jsonData){
    if (!res.headersSent) {
        res.send(jsonData);
    }
  });
});

router.get('/categories3', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=3', function(jsonData){
    if (!res.headersSent) {
        res.send(jsonData);
    }
  });
});

router.get('/categories4', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=4', function(jsonData){
    if (!res.headersSent) {
        res.send(jsonData);
    }
  });
});

router.get('/categories5', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=5', function(jsonData){
    if (!res.headersSent) {
        res.send(jsonData);
    }
  });
});

router.get('/programs-VED', function(req, res){
  query('SELECT * FROM VED', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-VED/past', function(req, res){
  query('SELECT * FROM VED v WHERE v.[VED Effective Date] < Date()', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-VED/future', function(req, res){
  query('SELECT * FROM VED v WHERE v.[VED Effective Date] > Date()', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-VED/10', function(req, res){
  query('SELECT * FROM VED v WHERE v.[State Uses 10 Percent]="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-VED/transition', function(req, res){
  query('SELECT * FROM VED v WHERE v.[VED to 10 Percent Transition]<>null', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-TBYB', function(req, res){
  query('SELECT * FROM TBYB', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-TBYB/past', function(req, res){
  query('SELECT * FROM TBYB t WHERE t.[CWR Sign Off]<>null', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-TBYB/future', function(req, res){
  query('SELECT * FROM TBYB t WHERE t.[CWR Sign Off] Is Null', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-TBYB/multi', function(req, res){
  query('SELECT * FROM TBYB t WHERE t.[Multi Tech Effective Date]<>null', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-SDA', function(req, res){
  query('SELECT * FROM SDA', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-SDA/past', function(req, res){
  query('SELECT * FROM SDA s WHERE s.[SDA Effective Date] < Date()', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-SDA/future', function(req, res){
  query('SELECT * FROM SDA s WHERE s.[SDA Effective Date] > Date()', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-RightTrack', function(req, res){
  query('SELECT * FROM Tag', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-RightTrack/plPast', function(req, res){
  query('SELECT * FROM Tag t WHERE t.[Tag PL Effective Date] < Date()', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-RightTrack/plFuture', function(req, res){
  query('SELECT * FROM Tag t WHERE t.[Tag PL Effective Date] > Date()', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-RightTrack/sfPast', function(req, res){
  query('SELECT * FROM Tag t WHERE t.[Tag Safeco Effective Date] < Date()', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/programs-RightTrack/sfFuture', function(req, res){
  query('SELECT * FROM Tag t WHERE t.[Tag Safeco Effective Date] > Date()', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/serff/:number', function(req, res){
  var number = req.params.number;
  query('SELECT * FROM Filing f WHERE f.SERFF=' +number, function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat1-algorithm', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=1 AND c.AlgorithmRestricted="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat1-tech', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=1 AND c.TechnologyRestricted="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat1-tc', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=1 AND c.TermsAndConditionsFiled="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat1-vendor', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=1 AND c.VendorChangeFiled="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat2-algorithm', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=2 AND c.AlgorithmRestricted="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat2-tech', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=2 AND c.TechnologyRestricted="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat2-tc', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=2 AND c.TermsAndConditionsFiled="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat2-vendor', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=2 AND c.VendorChangeFiled="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat3-algorithm', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=3 AND c.AlgorithmRestricted="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat3-tech', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=3 AND c.TechnologyRestricted="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat3-tc', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=3 AND c.TermsAndConditionsFiled="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat3-vendor', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=3 AND c.VendorChangeFiled="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat4-algorithm', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=4 AND c.AlgorithmRestricted="Y"', function(jsonData){
      res.send(jsonData);
  });
});

router.get('/cat4-tech', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=4 AND c.TechnologyRestricted="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat4-tc', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=4 AND c.TermsAndConditionsFiled="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat4-vendor', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=4 AND c.VendorChangeFiled="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat5-algorithm', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=5 AND c.AlgorithmRestricted="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat5-tech', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=5 AND c.TechnologyRestricted="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat5-tc', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=5 AND c.TermsAndConditionsFiled="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

router.get('/cat5-vendor', function(req, res){
  query('SELECT * FROM State_Category c WHERE c.Category=5 AND c.VendorChangeFiled="Y"', function(jsonData){
    if (!res.headersSent) {
      res.send(jsonData);
    }
  });
});

module.exports = router;
