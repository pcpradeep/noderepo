const os= require('os')

const user =  os.userInfo();

console.log(user)


console.log(`The system uptime ${os.uptime()/60} minutes`)

const currentOS={
    type:os.type(),
    version:os.version(),
    freeMem:os.freemem()
}

console.log(currentOS)