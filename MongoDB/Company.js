const {company}=require('./init');

function findCompany(options){
    return company.find(options)
}

function createCompany(company){
    company.insertMany([
        company
    ])
}

// findCompany({nam}).then((data)=>{
//     console.log(data)
// })

// addCompany()

module.exports={
    findCompany:findCompany
}