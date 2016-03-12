# appium-adb-repl
Simple REPL for playing with appium-adb

#Install
```bash
npm i -g appium-adb-repl
```

#Usage

* CLI
```bash
$ appium-abd-repl
$ info ADB Checking whether adb is present
$ info ADB Using adb from /Users/vrunoa/Library/Android/sdk/platform-tools/adb
$ appium-adb: adb.getConnectedDevices()
$ dbug ADB Getting connected devices...
$ dbug ADB 1 device(s) connected
$ [ { udid: '07042e0e13cca2d0', state: 'device' } ]
$ appium-adb:
```

* API
```javascript
import repl from 'appium-adb-repl'
repl()
```

Use it with your own ```appium-adb``` release
```javascript
import ADB from './build/index.js'
import repl from 'appium-adb-repl'
repl(ADB)
```

Play with every command of [appium-adb](https://github.com/appium/appium-adb) 
