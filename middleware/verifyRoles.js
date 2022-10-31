//Middleware included to confirm User Roles for site permissions and access 


const verifyRoles = (...allowedRoles) => {

    return (req, res, next) => {

        
        if(!req.session.role) return res.sendStatus(401);

        const roles = req.session.role;

        const rolesArray = [...allowedRoles];

        let testValue = false;
        for (const property in roles){

            if(rolesArray.includes(roles[property])){

                testValue = true;

                

                
            }
        }

        
        const result = testValue;
        if(!result) return res.sendStatus(401);
        next();
    
    }
}

module.exports = verifyRoles;