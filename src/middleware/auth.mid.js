import  jwt  from 'jsonwebtoken';
import { UNAUTHORIZED } from '../constants/httpStatus.js';


export default(req, res, next) => {
    const token = req.headers.access_token;
    if(!token) return res.status(UNAUTHORIZED).send();

    try{
        const decoded = jwt.verify(token, "hvhhhmlmqvquwvduiqvwicvyiqwvcyiv@343");
       // console.log(decoded);
        req.user = decoded;
    }
    catch(error){
        //console.log(error);
        res.status(UNAUTHORIZED).send();
    }

    return next();
};