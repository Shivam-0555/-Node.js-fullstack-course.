 import path from 'path';
 
 // join two or more file paths together
    const fullpath =path.join('/path','index.py','file.java')
    // console.log("files path =",fullpath);
// absolute(original path)
    const absolutePath = path.resolve('index.py');
    console.log("absolute path =",absolutePath); 

    // find extension name 
    const extname = path.extname('resume.pdf');
    console.log(extname);
    
    // if else is using api
    if(extname =='./pdf'){
        console.log("this is pdf file");
    }
  else{
    console.log("this is not pdf file ");
  }

    // having more path.function be can use it 

    