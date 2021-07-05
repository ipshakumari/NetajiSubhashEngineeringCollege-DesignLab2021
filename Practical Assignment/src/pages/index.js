import React,{useState} from 'react';
import './index.css';
import {Helmet} from "react-helmet"; 
const Agnikul = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '200vh',
        width: '100%',
      }}
    >
      <Helmet>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Helmet>
      <div class="container text-center">
      <div class="row">
      <div class="col-sm-4">
        <div
        style={{
          color: 'white',
          lineHeight: '60px',
          width: '100%',
          height: '70vh',
          backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1km4Y_gAMwZwyzFZ_i8IsCHYn1PEFu6K5sA&usqp=CAU" + ")",
          backgroundPosition: 'cover',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          
        }}
        >
          <h1><b>Bringing Space Within</b></h1>
          <div
            style={{
              lineHeight: '40px',
              borderLeftWidth: '100',
              color: 'green',
            }}
          >
          <h1><b>Everyone's Reach</b></h1>
          </div>
          <div
          style={{
            lineHeight: '30px',
          }}
          ><h3>Going to space shouldn’t be the hardest part of utilizing, living in<br></br>
            or working from space. So, why not design & build a product<br></br>
            that makes the earth-to-space journey as simple, as quick and<br></br>
            as affordable as possible?</h3>
          </div>
          <div><a href = '/products'>Checkout Agniban</a></div>
        </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
        <div class="row">
          <div class="col-sm-4">
            <h1 style ={{color: '#396449'}}>Facts & Figures</h1>
          </div>
      </div>
    <div class="row">
      <div class="col-sm-4">
        <h2 style ={{color: 'grey',lineHeight:'30px',}}>
            Agnibaan’s first stage could have 4 / 5 / 6 or 7 engines. An optional third<br></br>
            “baby” stage might be available for select missions.
   
        </h2>
      <br></br>
      </div>
    </div>
    <div class="row">
          <td id="example1" class="hoverer" class= "container1" class= "card">
            
            <span class="nohower">
              <div id="demo" class="img-circle person" width="50" height="50" style = {{ border: "10px solid transparent",backgroundColor: "white",}}>
                <h1 style ={{color: "green",lineHeight:'30px',}}>
                     5<br></br>
                </h1>
                 <h3>
                    CONFIGURATION
                </h3>
              </div>
            </span>
            <span class="hover">
              <div id="demo"  width="100" height="100" style = {{ border: "10px solid transparent",backgroundColor: "#3A8054",}}>
                <h3 style ={{color: 'white',lineHeight:'30px',}} >
                 A first stage with 4 / 5 /<br></br>
                  6 or 7 engines. A “baby”<br></br>
                stage could be made<br></br>
                available for select<br></br>
                missions.
                </h3>
              </div>
            </span>
          </td>

          <td id="example1" class="hoverer" class= "container1" class= "card">
            <span class="nohower">
              <div id="demo" class="img-circle person" width="50" height="50"  style = {{ border: "10px solid transparent",backgroundColor: "white",}}>
              <h1 style ={{color: "green",lineHeight:'30px',}}>
                     2<br></br>
              </h1>
              <h3>
                  WEEKS
                </h3>
              </div>
            </span>
            <span class="hover">
              <div id="demo"  width="100" height="100" style = {{ border: "10px solid transparent",backgroundColor: "#3A8054",}}>
                <h3 style ={{color: 'white',lineHeight:'30px',}}>
                Payload integration to<br></br>
                launch won’t take more <br></br>
                than a fortnight. Yes, <br></br>
                launch-when-you-want. <br></br>
                </h3>
              </div>
            </span>
          </td>

          <td id="example1" class="hoverer" class= "container1" class= "card">
            <span class="nohower">
              <div id="demo" class="img-circle person" width="50" height="50"  style = {{ border: "10px solid transparent",backgroundColor: "white",}}>
              <h1 style ={{color: "green",lineHeight:'30px',}}>
                     10+<br></br>
              </h1>
              <h3>
                    LAUNCH PORTS
                </h3>
              </div>
            </span>
            <span class="hover">
              <div id="demo"  style = {{ border: "10px solid transparent",backgroundColor: "#3A8054",}}>
                <h3 style ={{color: 'white',lineHeight:'30px',}}>
                Access to 10+<br></br>
                launchports today.<br></br>
                Access to 25+ coming<br></br>
                soon. Yes, launch- <br></br>
                where-you-want.
                </h3>
              </div>
            </span>
          </td>
          <td id="example1" class="hoverer" class= "container1" class= "card">
            <span class="nohower">
              <div id="demo" class="img-circle person" width="50" height="50" style = {{ border: "10px solid transparent",backgroundColor: "white",}}>
              <h1 style ={{color: "green",lineHeight:'30px',}}>
                     100 kg<br></br>
              </h1>
              <h3>
                  MASS  
                </h3>
              </div>
            </span>
            <span class="hover">
              <div id="demo"  style = {{ border: "10px solid transparent",backgroundColor: "#3A8054",}}>
                <h3 style ={{color: 'white',lineHeight:'30px',}}>
                Same price per kg for  <br></br>
                any payload in the 25- <br></br>
                100 kg range. Yes, pay-<br></br>
                for-what-you-launch.
                </h3>
              </div>
            </span>
          </td>
          
          </div>
			 </div> 
    </div>  
  );
};
  
export default Agnikul;