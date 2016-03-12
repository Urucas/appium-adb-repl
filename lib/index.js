import ADB from 'appium-adb';
import repl from 'repl';
import { promirepl } from 'promirepl';
 
const server = async function() {
  let adb = await ADB.createADB();
  const saywot = repl.start({
    prompt: "appium-adb: "
  });
  saywot.context.adb = adb;
  promirepl(saywot);
  return saywot;
};

export default server;