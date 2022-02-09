const { Users } = require("../../db");

const putUser = async (req, res) => {
  
  const { email, name, country, address, cp, state, del, inactiveUser, activeUser, activeAdmin, inactiveAdmin } = req.body;
  
  console.log(name)
  try {
    
    console.log(req.body)
    
    let toEdit = await Users.findOne(
      { 
        where: { email } 
      }
    );
    

    if (del){
      toEdit.active = false;
    }
    
    else if(inactiveUser) {
      toEdit.active = false;    
    } 
      
    else if(activeUser) {  
      toEdit.active = true;     
    } 
      
    else if(activeAdmin) {   
      toEdit.admin = true;
    }
         
    else if(inactiveAdmin) {
      toEdit.admin = false;
    }
    
    if(name){
      toEdit.name = name;
    }
    
    if(address){
      toEdit.address = address;
    }
    
    if(cp){
      toEdit.cp = cp;
    }
    
    if(state){
      toEdit.state = state;
    } 
    
    if(country) {
      toEdit.country = country;
    }
    
    
    await toEdit.save();
    res.json(toEdit);
  
  } catch (error) {
    res.json(error);
  }

};

module.exports = { putUser };