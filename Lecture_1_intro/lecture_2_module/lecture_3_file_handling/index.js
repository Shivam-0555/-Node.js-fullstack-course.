import {readFile, writeFile, appendFile, mkdir} from 'fs/promises';

//Read file asynchronously

const read_file = async (fileName) => {
const data = await readFile(fileName,'utf-8')
console.log(data);
};

//call read file
// read_file('sample.txt') 


// create file

const create_file = async(fileName,content) =>{
    await writeFile(fileName,content);
    console.log("file create successfuly...")
}
// call create file
// create_file('ai.py','thsis is a python file'); 

// add content to file
const append_file = async(fileName,content) =>{
 await appendFile(fileName,content);
 console.log("content added successfuly...")
}

//call appendFile
// append_file('App.jsx',"Hello this is a node js file");

// create a folder  using mkdir
const create_folder = async(dir)=>{

    await mkdir(dir,{recursive:true});
}
create_folder('src/py');



