import React, { Component } from 'react';


class Numbers extends Component {
  render() {
 
    const sum = 10 + 10;
    const sub = 10 - 10;
    const prod = 10 * 10;
    const quo = 10 / 10;

    return (
      <>
        <h2><span style={Style.color}>{this.props.operator1}</span> of 
         <span style={Style.color}> {this.props.num1}  </span>
        and <span style={Style.color}>{this.props.num1}
        </span> is: <span style={Style.color}>{sum}</span></h2>

        <h2><span style={Style.color}>{this.props.operator2}</span> of 
        <span style={Style.color}> {this.props.num1}  </span>
        and <span style={Style.color}>{this.props.num1}
        </span> is: <span style={Style.color}>{sub}</span></h2>

        <h2><span style={Style.color}>{this.props.operator3}</span> of 
        <span style={Style.color}> {this.props.num1}  </span>
        and <span style={Style.color}>{this.props.num1}
        </span> is: <span style={Style.color}>{prod}</span></h2>

        <h2><span style={Style.color}>{this.props.operator4}</span> of 
        <span style={Style.color}> {this.props.num1}  </span>
        and <span style={Style.color}>{this.props.num1}
        </span> is: <span style={Style.color}>{quo}</span></h2>

        </>
     
    );
  }
}
  const Style = {
  color:{
  fontFamily: "monospace",
  fontSize: "25px",
  color: "red",
   }
}


export default Numbers;

























// class Numbers extends Component {
//   render() {
  
//     const sum = 10 + 10;
//     const sub = 20 - 10;
//     const mul = 10 * 20;
//     const div = 20 / 10;

//     return (
//       <>
//         <h2>{this.props.operator}  of <span style={Style.color}>{this.props.num1}  </span>
//         and <span style={Style.color}>{this.props.num1} 
//         </span> is <span style={Style.color}>{sum}</span></h2> 

//         </>
     
//     );
//   }
// }
//   const Style = {
//   color:{
//   fontFamily: "monospace",
//   fontSize: "25px",
//   color: "red",
//    }
// }

// export default Numbers;









        // <h2><span style={{color:"red"}}> {this.props.operator} </span> 
        // of <span style={{color:"red"}}>{this.props.num1}</span> and
        //  <span style={{color:"red"}}> {this.props.num2}</span>  is 
        //  <span style={{color:"red"}}> {sum}</span></h2>
















// class Numbers extends Component {
//   render() {
  
//     const sum = 10 + 10;
  

//     return (
//       <>
//         <h2>{this.props.num1} of <span style={Style.color}>{this.props.num1}  </span>
//         and <span style={Style.color}>{this.props.num1} 
//         </span> is <span style={Style.color}>{sum}</span></h2> 


//         </>
     
//     );
//   }
// }
//   const Style = {
//   color:{
//   fontFamily: "monospace",
//   fontSize: "25px",
//   color: "red",
//    }
// }

// export default Numbers;
