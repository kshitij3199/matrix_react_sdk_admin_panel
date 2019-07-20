// import React, { Component } from 'react';


// class Admin extends Component{
//     render(){
//         return(
//             <div className="Admin">
//                 <h1>hi admin</h1>
//                 <div>Name : kshitij</div>
//                 <div>Age : 19</div>
//                 <div>Belt: Black</div>
                
//             </div>
//         )
//     }
// }
// export default Admin

import React  from 'react';
//import MemoryStore from '../../../../../matrix-js-sdk/src/store/memory';
//import LocalIndexedDBStoreBackend from '../../../../../matrix-js-sdk/src/store/indexeddb-local-backend';
//import RoomListStore from "../../../../src/stores/RoomListStore";
//import Background from '../../../../../riot-web/webapp/themes/riot/img/backgrounds/valley.jpg';
//import xyz from '../../../../../riot-web/webapp/themes/riot/img/backgrounds/valley.jpg';
//import abc from '../../../../../riot-web/webapp/themes/riot/img/backgrounds';
//import RoomListStore from '../../../../src/stores/RoomListStore';
//const lists = RoomListStore.getRoomLists();
//import xyz from '/valley.jpg'; 
// var divStyle = {
//     // backgroundImage: `url(${abc}+)`,
//     //backgroundImage: 'url("valley.jpg")',

//     background: 'red',
//     height: '100%',
//     width: '100%'
// };

//class Admin extends Component{
    const Admin = React.createClass({
        displayName: 'Admin',    
        
        render(){
            // var image = '../../../../../riot-web/webapp/themes/riot/img/backgrounds/valley.jpg';
            var image = 'welcome/images/valley.jpg';
            
            //const roomLists = RoomListStore.getRoomLists();
            var divStyle = {
                // backgroundImage: `url(${abc}+)`,
                backgroundImage: 'url("'+image+'")',
                backgroundSize : 'cover',
                overflowY: 'hidden',
                //background: 'red',
                height: '100%',
                width: '100%'
            };

            return(
                <div style={divStyle} className="Admin">
                <marquee behavior="scroll" direction="left" style={{top:'50%'}}>
                    <h1 style={{position:'center'}}>Welocme to Admin Page</h1>
                    <h3 style={{}}>This page is  under construction</h3>
                   
                </marquee>
            
                    
                   
                    
                </div>
            )
        }
    });
    
    export default Admin;


