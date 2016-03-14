import ADB from 'appium-adb';
import repl from 'repl';
import { promirepl } from 'promirepl';
 
const server = async function(opts = undefined) {
  var adb;
  if(opts == undefined) {
    adb = await ADB.createADB();
  }else{
    const options = opts.opts || {};
    if(opts.ADB){
      adb = await opts.ADB.createADB(options);
    }else{
      adb = await ADB.createADB(options);
    }
  }
  const saywot = repl.start({
    prompt: "appium-adb: "
  });
  saywot.context.adb = adb;
  promirepl(saywot);
  return saywot;
};

export default server;