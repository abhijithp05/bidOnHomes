/** @jsx jsx */
import { jsx } from "@emotion/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addProductToCart, setProductListView } from "../actions";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 140,
  },
});

const ProductItemPopupUnwrapped = (props) => {
  let quantityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.isModalOpen}
    >
      <MuiDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Selected Product
      </MuiDialogTitle>
      <MuiDialogContent dividers>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.productDetails.image}
              title="Product Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.productDetails.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.productDetails.description}
              </Typography>
              <Typography variant="h5" color="textPrimary" component="p">
                <h3>{"Price: Rs." + props.productDetails.price * quantity}</h3>
                &nbsp;&nbsp;
                <Select native value={quantity} onChange={handleQuantityChange}>
                  {quantityList.map((qty) => {
                    return (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                    );
                  })}
                </Select>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary" onClick={props.handleClose}>
              Cancel
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                props.addProductToCart(props.productDetails, quantity);
                props.setProductListView(false);
                props.handleClose();
              }}
            >
              Add Product
            </Button>
          </CardActions>
        </Card>
      </MuiDialogContent>
    </Dialog>
  );
};

export const ProductItemPopup = connect(null, {
  addProductToCart,
  setProductListView,
})(ProductItemPopupUnwrapped);
