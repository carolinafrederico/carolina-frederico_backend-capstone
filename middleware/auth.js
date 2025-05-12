function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/');
    }
    next();
  }
  export const isAuthenticated = (req, res, next) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }
    next();
  };
  module.exports = { checkAuthenticated, checkNotAuthenticated };
  