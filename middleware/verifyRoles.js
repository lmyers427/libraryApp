const verifyRoles = (...allowedRoles) => {

    return (req, res, next) => {

        
        if(!req.session.role) return res.sendStatus(401);

        const roles = req.session.role;

        const rolesArray = [...allowedRoles];

        console.log(rolesArray);
        let testValue = false;
        for (const property in roles){

            console.log(property);
            if(rolesArray.includes(roles[property])){

                testValue = true;

                console.log(testValue);

                
            }
        }

        console.log(testValue);
        const result = testValue;
        if(!result) return res.sendStatus(401);
        next();
    
    }
}

module.exports = verifyRoles;