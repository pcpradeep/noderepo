const http = require('http');

const server = http.createServer((req,res) =>{

    if(req.url === '/about')
    {
        res.write('Welcome to about page')
        res.end()
    }
    else if(req.url === '/contact')
    {
        res.write('This is our Contact Us page')
        res.end()
    }else{

        res.write(`
    <h3>The page you are looking for is not available</h3>
    <p style='color:red'>Page is not available</p>
    `)
    res.end()

    }
    
    
})


server.listen(4000)