var mysql = require('mysql');
module.exports = function (app, passport) {
    app.get('/', function (req, res) {
        res.render('index.ejs');
    });


/*===================================================== Login ========================================================*/
    app.get('/login', function (req, res) {
        res.render('login.ejs', {message: req.flash('loginMessage')});
    });
    app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/event',
            failureRedirect: '/login',
            failureFlash: true
        }),
        function (req, res) {
            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }
            res.redirect('/');
        });
/*===================================================== Login ========================================================*/

/*===================================================== Register ========================================================*/

    app.get('/signup', function (req, res) {
        res.render('signup.ejs', {message: req.flash('signupMessage')});
    });
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/event',
        failureRedirect: '/signup',
        failureFlash: true
    }));
/*===================================================== Register ========================================================*/

/*===================================================== Profile ========================================================*/

    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('pages/profile.ejs', {
            user: req.user
        });
    });
/*===================================================== Profile ========================================================*/

/*===================================================== Database Connection ============================================*/
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'nodejs_login',
    });
/*===================================================== Database Connection ============================================*/

/*===================================================== format date ====================================================*/
    var dateFormat = require('dateformat');
    var now = new Date();
/*===================================================== format date ====================================================*/

/*===================================================== Global variable ================================================*/
    const siteTitle = 'Royal Manta';
    const baseURL = 'http://localhost:7500/event';
/*===================================================== Global variable ================================================*/

/*===================================================== index ========================================================*/
    /*Get Events*/
    app.get('/event', isLoggedIn, function (req, res) {

        con.query('SELECT * FROM `events` ORDER BY start_date DESC', function (error, result) {
            console.log(result);
            console.log(error);

            res.render('pages/index', {
                siteTitle: siteTitle,
                pageTitle: 'Royal Manta',
                events: result,
                user: req.user
            });
        });
    });
/*===================================================== index ========================================================*/


/*===================================================== Add ==========================================================*/
    /* Get Add Event */
    app.get('/event/add',isLoggedIn, function (req, res) {
        res.render('pages/event/add', {
            siteTitle: siteTitle,
            pageTitle: 'Add Tour Guide',
        });
    });

    /* Post Add Event */
    app.post('/event/add', function (req, res) {
        var query = "INSERT INTO `events`(`number`,`name`, `city`, `fess`, `nationality`,`national`,`passport_number`,`licence_number`,`language`, `start_date`, `end_date`, `status`) VALUES (";
        query += " '" + req.body.number + "' ,";
        query += " '" + req.body.name + "' ,";
        query += " '" + req.body.city + "' ,";
        query += " '" + req.body.fess + "' ,";
        query += " '" + req.body.nationality + "' ,";
        query += " '" + req.body.national + "' ,";
        query += " '" + req.body.passport_number + "' ,";
        query += " '" + req.body.licence_number + "' ,";
        query += " '" + req.body.language + "' ,";
        query += " '" + dateFormat(req.body.start_date, "yyyy-mm-dd") + "' ,";
        query += " '" + dateFormat(req.body.end_date, "yyyy-mm-dd") + "' ,";
        query += " '1' )";

        console.log(query);

        con.query(query, function (error, result) {
            console.log(result);
            console.log(error);

            res.redirect(baseURL);
        });
    });
/*===================================================== Add ==========================================================*/


/*===================================================== Edit =========================================================*/
    /* Get Edit Event */
    app.get('/event/edit/:id',isLoggedIn, function (req, res) {
        con.query("SELECT * FROM `events` WHERE id= '" + req.params.id + "'", function (error, result) {
            console.log(result);
            console.log(error);

            result[0].start_date = dateFormat(result[0].start_date, "yyyy-mm-dd");
            result[0].end_date = dateFormat(result[0].end_date, "yyyy-mm-dd");

            res.render('pages/event/edit', {
                siteTitle: siteTitle,
                pageTitle: 'Edit Tour Guide',
                event: result,
            });
        });
    });

    /* Post Edit Event */
    app.post('/event/edit/:id', function (req, res) {
        var query = "UPDATE `events` SET";
        query += " `number`= '" + req.body.number + "' ,";
        query += " `name`= '" + req.body.name + "' ,";
        query += "`city`= '" + req.body.city + "' ,";
        query += "`fess`= '" + req.body.fess + "' ,";
        query += "`nationality`= '" + req.body.nationality + "' ,";
        query += "`national`= '" + req.body.national + "' ,";
        query += "`passport_number`= '" + req.body.passport_number + "' ,";
        query += "`licence_number`= '" + req.body.licence_number + "' ,";
        query += "`language`= '" + req.body.language + "' ,";
        query += "`start_date`='" + dateFormat(req.body.start_date, "yyyy-mm-dd") + "',";
        query += "`end_date`= '" + dateFormat(req.body.end_date, "yyyy-mm-dd") + "' ";
        query += "WHERE `events`.`id` = " + req.params.id + "";

        console.log(query);

        con.query(query, function (error, result) {
            console.log(result);
            console.log(error);

            if (result.affectedRows) {
                res.redirect(baseURL);
            }
        });
    });

/*===================================================== Edit =========================================================*/

/*===================================================== Delete =======================================================*/
    app.get('/event/delete/:id',isLoggedIn, function (req, res) {
        con.query("DELETE FROM `events` WHERE id= '" + req.params.id + "'", function (error, result) {
            console.log(result);
            console.log(error);

            if (result.affectedRows) {
                res.redirect(baseURL);
            }
        });
    });
/*===================================================== Delete =======================================================*/

/*===================================================== logout =======================================================*/

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    })
};
/*===================================================== logout =======================================================*/

/*===================================================== Authenticated =======================================================*/
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
/*===================================================== Authenticated =======================================================*/
