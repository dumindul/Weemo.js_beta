# Weemo JavaScript API examples 


In this repository, you will find examples describing how to implement Weemo Video.


### Content:
- [How to deploy the examples](https://github.com/weemo/Weemo.js_beta/tree/master/examples#how-to-deploy-the-examples)
    - [Requirement](https://github.com/weemo/Weemo.js_beta/tree/master/examples#requirement)
    - [Setting up the AppID](https://github.com/weemo/Weemo.js_beta/tree/master/examples#setting-up-the-appid)
- [How to use the examples](https://github.com/weemo/Weemo.js_beta/tree/master/examples#how-to-use-the-examples)
- Examples
    - [Call 1to1 WD and WebRTC](https://github.com/weemo/Weemo.js_beta/tree/master/examples/Call%201to1%20WD%20and%20WebRTC)
    - [Call 1to1 WD only](https://github.com/weemo/Weemo.js_beta/tree/master/examples/Call%201to1%20WD%20only)
    - [Call 1to1WebRTC only with drag and drop](https://github.com/weemo/Weemo.js_beta/tree/master/examples/Call%201to1WebRTC%20only%20with%20drag%20and%20drop)
    - [Call 1to1WebRTC only](https://github.com/weemo/Weemo.js_beta/tree/master/examples/Call%201to1WebRTC%20only)
    - [Conference Call WD only](https://github.com/weemo/Weemo.js_beta/tree/master/examples/Conference%20Call%20WD%20only)

### How to deploy the examples

##### Requirement

- It is important that the project is served from a webserver and not from the file system when using WebRTC.
- Be aware of your AppId, and understand what is a ```UID``` and a ```Display Name```

You can find more details about AppID, UID and Display Name here

##### Setting up the AppID

Once you have received your ```AppID``` provided by Weemo, you can setup these examples with your AppId in order to test the API. The only thing you have to do is to setup the ```AppId```.
To do so, for each of the Javascript examples you want to use, you must edit the .html file and
replace the placeholder "YOUR_APP_IDENTIFIER" by your AppID in the following lines"

```html
<script type="text/javascript" src="https://download.weemo.com/js/webappid/YOUR_APP_IDENTIFIER"></script>
```

and 

```JavaScript
var weemo = new Weemo("YOUR_APP_IDENTIFIER", "callee_uid", "internal", "", "1", "Callee");
```

Now that you have setup the AppId you can upload the examples on a webserver and start using them.

In these examples, the ```UID``` and ```Display Name``` are already set. 
In the **caller.html**, you will be connected using **caller_uid** as a ```UID``` and **Caller** as a ```Display Name```, and if you are using **callee.html**, you will be connected using **callee_uid** as a ```UID``` and **Callee** as a ```Display Name```.

You can find more details about ```AppID```, ```UID``` and ```Display Name``` [here]()

### How to use the examples

Each one-to-one call example is composed of two html files. One called **caller.html** and the other one named ```callee.html```. In order to initiate a call between these two pages here a the steps you have to follow:

- Open ```callee.html``` in one computer and wait te be connected. You will know that you are connected when you will see these sentences appear in your browswer:

```JavaScript
Connected as Callee using (WeemoDriver|WebRTC).
Waiting for a call.
```

- At this moment open the ```caller.html``` in another computer and wait  to be connected. You will know that you are connected when you will see the following sentence appears in your browser as well as a button labeled **'Click to call Callee'**:

```JavaScript
Connected as Caller using (WeemoDriver|WebRTC)
```

- Click the button **'Click to call Callee'** in the ```caller.html``` page in your browser. The call is initiated.
- Answer the call in the ```callee.html``` page and the Video Chat starts.

>Warning: If using WebRTC, you will be ask to allow access to your microphone and camera when initiating a call and when accepting a call. Click ```Allow``` in order to give WebRTC access to these peripherics. 


# Weemo JavaScript API Documentation

For a full JavaScript API reference plese refer to our official documentation website : [http://docs.weemo.com/beta](http://docs.weemo.com/beta) and refer to our Github documentation:

###Javascript API Quick-start:
- [Quick-start WeemoDriver and WebRTC](https://github.com/weemo/Release-5.x/wiki/Javascript-API---Quick-start)

###Javascript API Integration:
- [Integration WeemoDriver and WebRTC](https://github.com/weemo/Release-5.x/wiki/Javascript-API-Integration)

###WeemoDriver Definitions
- [Definitions](https://github.com/weemo/Release-4.0/wiki/WeemoDriver-Naming)

## Hardware Requirements

### Operating systems:
* Windows XP SP3 <br/>
* Windows 7 and 8<br/>
* Mac OS 10.6, 10.7 and 10.8


### Compatible browsers:
* Chrome <br/>
* Firefox <br/>
* Safari 5 or later<br/>
* IE8 or later


## About Weemo

The Weemo Video Cloud is a solution specifically targeted at application software vendors providing real-time video communications embedded within any web or mobile application. The solution is particularly well suited for business software applications such as Enterprise Social Networks, CRM, HCM, Customer Service, eHealth, Education and E-learning, as well as for Contact Management and Collaboration.

Weemo relies on standard protocols and open source technologies to deliver a carrier class service. The solution provides constant interoperability with existing or future communication-oriented devices and network infrastructures.

Weemo provides both the client technology and integration means and a worldwide cloud infrastructure. These building blocks are designed to work together as one easy-to-use solution. The application vendor, provider of the web application to be integrated with Weemo, will integrate this SDK to his application to allow audio and video communication.

Learn more about Weemo at <a href="http://www.weemo.com">Weemo.com</a>.
