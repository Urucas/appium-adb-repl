import ADB from 'appium-adb';
import repl from 'repl';
import { promirepl } from 'promirepl';
 
const server = async function(CustomADB = undefined) {
  var adb;
  if(CustomADB == undefined) {
    adb = await ADB.createADB();
  }else {
    adb = await CustomADB.createADB();
  }
  const saywot = repl.start({
    prompt: "appium-adb: "
  });
  saywot.context.adb = adb;
  promirepl(saywot);
  return saywot;
};

export default server;