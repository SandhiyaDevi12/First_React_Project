import React from 'react';
 * 
 * class Component_name extends React.Component{
 *  
 *      render(){
 *          return(
 *              html_content
 *          )
 *      }
 *  
 * }
 * 
 * export default Component_name;
 * 
 */

import React from 'react';

class ClassComponent extends React.Component{

    render(){
        return(
            <>
                <h2>Class Component Example</h2>
                <h4>UserName : {this.props.userObject.loggedUserName} </h4>
                <h4>Age : {this.props.userObject.age} </h4>
                <h4>Address : {this.props.userObject.address.city} </h4>
            </>
        )
    }

}

export default ClassComponent;
