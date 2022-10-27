const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://easytenders.co.za/tenders/hr-and-training'
const data = []
async function getTenders(){
    try{
        const response = await axios.get(url);
        const $ = cheerio.load(response.data)
        //const articleTitle = $('div').find('.col-sm-8').text()
        const testTitle = ''
        const tenders = $('div').find('.card w-100 mb-2 tender')
        tenders.each(function(){
            testTitle = $(this).find('div .col-sm-8');
            link = $(this).find('a').attr('href').text()            
            data.push({title, link})
            
        })
        console.log(data)
        //console.log(title)
    }
    catch(error){
        console.error(error)
    }
}

getTenders()


app.listen(PORT, ()=> console.log(`Server running on PORT: ${PORT}`))