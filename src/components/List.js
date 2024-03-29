import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import Checkbox from '@material-ui/core/Checkbox';


class GroceryList extends Component{
  render() {
      if(this.props.data){
        console.log(this.props.data)
        var grocerires= this.props.data.groceries.map(function(grocery){
          return <li> {grocerires.name +" "+grocerires.price}></li>
        })
}
return(
  <ul>
    {grocerires}
  </ul>
)





}
}

export default GroceryList
// const styles = theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// });

// class CheckboxListSecondary extends React.Component {

//   state = {
//     checked: [1],
//   };

//   handleToggle = value => () => {
//     const { checked } = this.state;
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     this.setState({
//       checked: newChecked,
//     });
//   };

//   render() {
//     const { classes } = this.props;
//       if(this.props.data){
//         var grocerires= this.props.data.grocerires.map(function(grocery){
//           return <li> {grocery.name +" "+grocery.price}></li>
//         })
//       } 

//     return (
//       <List dense className={classes.root}>
//         {[0, 1, 2, 3, 4, 5].map(value => (
//           <ListItem key={value} button>
//             <ListItemText primary={'grocerires.name +" "+grocerires.price'} />
//             <ListItemSecondaryAction>
//               <Checkbox
//                 onChange={this.handleToggle(value)}
//                 checked={this.state.checked.indexOf(value) !== -1}
//               />
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>
//     );
//   }
// }
    
// CheckboxListSecondary.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(CheckboxListSecondary);
