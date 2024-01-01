var express = require('express');
var router = express.Router();

var states = [
    { name: 'Alabama', flagUrl: 'https://flag-company.web.app/Alabama.png' },
    { name: 'Alaska', flagUrl: 'https://flag-company.web.app/Alaska.png' },
    { name: 'Arizona', flagUrl: 'https://flag-company.web.app/Arizona.png' },
    { name: 'Arkansas', flagUrl: 'https://flag-company.web.app/Arkansas.png' },
    { name: 'California', flagUrl: 'https://flag-company.web.app/California.png' },
    { name: 'Colorado', flagUrl: 'https://flag-company.web.app/Colorado.png' },
    { name: 'Connecticut', flagUrl: 'https://flag-company.web.app/Connecticut.png' },
    { name: 'Delaware', flagUrl: 'https://flag-company.web.app/Delaware.png' },
    { name: 'Florida', flagUrl: 'https://flag-company.web.app/Florida.png' },
    { name: 'Georgia', flagUrl: 'https://flag-company.web.app/Georgia.png' },
    { name: 'Hawaii', flagUrl: 'https://flag-company.web.app/Hawaii.png' },
    { name: 'Idaho', flagUrl: 'https://flag-company.web.app/Idaho.png' },
    { name: 'Illinois', flagUrl: 'https://flag-company.web.app/Illinois.png' },
    { name: 'Indiana', flagUrl: 'https://flag-company.web.app/Indiana.png' },
    { name: 'Iowa', flagUrl: 'https://flag-company.web.app/Iowa.png' },
    { name: 'Kansas', flagUrl: 'https://flag-company.web.app/Kansas.png' },
    { name: 'Kentucky', flagUrl: 'https://flag-company.web.app/Kentucky.png' },
    { name: 'Louisiana', flagUrl: 'https://flag-company.web.app/Louisiana.png' },
    { name: 'Maine', flagUrl: 'https://flag-company.web.app/Maine.png' },
    { name: 'Maryland', flagUrl: 'https://flag-company.web.app/Maryland.png' },
    { name: 'Massachusetts', flagUrl: 'https://flag-company.web.app/Massachusetts.png' },
    { name: 'Michigan', flagUrl: 'https://flag-company.web.app/Michigan.png' },
    { name: 'Minnesota', flagUrl: 'https://flag-company.web.app/Minnesota.png' },
    { name: 'Mississippi', flagUrl: 'https://flag-company.web.app/Mississippi.png' },
    { name: 'Missouri', flagUrl: 'https://flag-company.web.app/Missouri.png' },
    { name: 'Montana', flagUrl: 'https://flag-company.web.app/Montana.png' },
    { name: 'Nebraska', flagUrl: 'https://flag-company.web.app/Nebraska.png' },
    { name: 'Nevada', flagUrl: 'https://flag-company.web.app/Nevada.png' },
    { name: 'New Hampshire', flagUrl: 'https://flag-company.web.app/New_Hampshire.png' },
    { name: 'New Jersey', flagUrl: 'https://flag-company.web.app/New_Jersey.png' },
    { name: 'New Mexico', flagUrl: 'https://flag-company.web.app/New_Mexico.png' },
    { name: 'New York', flagUrl: 'https://flag-company.web.app/New_York.png' },
    { name: 'North Carolina', flagUrl: 'https://flag-company.web.app/North_Carolina.png' },
    { name: 'North Dakota', flagUrl: 'https://flag-company.web.app/North_Dakota.png' },
    { name: 'Ohio', flagUrl: 'https://flag-company.web.app/Ohio.png' },
    { name: 'Oklahoma', flagUrl: 'https://flag-company.web.app/Oklahoma.png' },
    { name: 'Oregon', flagUrl: 'https://flag-company.web.app/Oregon.png' },
    { name: 'Pennsylvania', flagUrl: 'https://flag-company.web.app/Pennsylvania.png' },
    { name: 'Rhode Island', flagUrl: 'https://flag-company.web.app/Rhode_Island.png' },
    { name: 'South Carolina', flagUrl: 'https://flag-company.web.app/South_Carolina.png' },
    { name: 'South Dakota', flagUrl: 'https://flag-company.web.app/South_Dakota.png' },
    { name: 'Tennessee', flagUrl: 'https://flag-company.web.app/Tennessee.png' },
    { name: 'Texas', flagUrl: 'https://flag-company.web.app/Texas.png' },
    { name: 'Utah', flagUrl: 'https://flag-company.web.app/Utah.png' },
    { name: 'Vermont', flagUrl: 'https://flag-company.web.app/Vermont.png' },
    { name: 'Virginia', flagUrl: 'https://flag-company.web.app/Virginia.png' },
    { name: 'Washington', flagUrl: 'https://flag-company.web.app/Washington.png' },
    { name: 'West Virginia', flagUrl: 'https://flag-company.web.app/West_Virginia.png' },
    { name: 'Wisconsin', flagUrl: 'https://flag-company.web.app/Wisconsin.png' },
    { name: 'Wyoming', flagUrl: 'https://flag-company.web.app/Wyoming.png' },
    { name: 'Washington D.C.', flagUrl: 'https://flag-company.web.app/Washington.png' }
];

router.get('/', function(req, res, next) {
  res.render('prototype_3', { title: 'Prototype 3', states: states, selectedState: null });
});

module.exports = router;
