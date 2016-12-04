"use strict";
var crmapi = require('../../lib/crmdiscoapi');
var CallDisco = (function () {
    function CallDisco() {
    }
    CallDisco.main = function () {
        console.log('Starting ');
        var config = new crmapi.crmdiscoapiconfig();
        config.APIUrl = 'https://globaldisco.crm.dynamics.com/api/discovery/v1.0/';
        config.AccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlJyUXF1OXJ5ZEJWUldtY29jdVhVYjIwSEdSTSIsImtpZCI6IlJyUXF1OXJ5ZEJWUldtY29jdVhVYjIwSEdSTSJ9.eyJhdWQiOiJodHRwczovL2Rpc2NvLmNybS5keW5hbWljcy5jb20vIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJjYjdjMzMtNTNmNC00NGExLTlkODItZTI3MTNjNzA5NDZlLyIsImlhdCI6MTQ4MDgzNzk1NSwibmJmIjoxNDgwODM3OTU1LCJleHAiOjE0ODA4NDE4NTUsImFjciI6IjEiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiZWM3NzIwNDAtNjZmMC00ZWRkLWIwODctN2M0N2U5NWNmMjE3IiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJBZG1pbiIsImdpdmVuX25hbWUiOiJDb3Vyc2UiLCJpcGFkZHIiOiIxNzIuMjUxLjc0LjIzMCIsIm5hbWUiOiJDb3Vyc2UgQWRtaW4iLCJvaWQiOiI1MzI3M2RhMC02NmRhLTRhZTYtYjM2ZS1lN2U4MjNlYWY1MzUiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzNGRkY5QkNGQTA3NyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InZ0WTR2a3J5cmVaMmxMU1lQSVpLMWpGekpKRV8xT2FpNE96TVh2THRqSVEiLCJ0aWQiOiI3MmNiN2MzMy01M2Y0LTQ0YTEtOWQ4Mi1lMjcxM2M3MDk0NmUiLCJ1bmlxdWVfbmFtZSI6ImFkbWluQHBhODIub25taWNyb3NvZnQuY29tIiwidXBuIjoiYWRtaW5AcGE4Mi5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCJdfQ.Fuqc1ai35MzhMxqsCKYVjA_rh013tzGNdX9ePbTDlpgAw0s4Cbu-xP9rl6ArjAm5FfUq_4ed8MyiLYAwF-YzAsd7BZ2kHmC1VEQqCwypuoJERTT6MyzkJ3gi-N3Ynl1RSuA-qFNPaMbxePoh0BU8kUUsc9BKcmRI11Q9puEmX5ffZ0tV7uq6UQ0CJRSlEmMSNZ4p7pFQuPGVmF2USE_pv_p5C498MCtZ1fcZZl_rYSTVa2xgfwmveKMuw5xiLipjesIqu8VePY9oUlVg0SXbyDGZnikgXuxMCf86DlpSZMrmyuG_sMpfftBlYhs7kl3W2d1MWyMa4_-qjFk2ermwPg';
        var api = new crmapi.crmdiscoapi(config);
        api.GetInstances().then(function (results) {
            console.log(results);
        }, function (error) { console.log(error); });
        api.Get(null, "org3c268c23").then(function (result) { console.log(result); });
        api.Get('d5a98156-2184-41aa-8bd7-df3b5394fd12', null).then(function (result) { console.log(result); });
        return 0;
    };
    return CallDisco;
}());
CallDisco.main();
//# sourceMappingURL=calldisco.js.map