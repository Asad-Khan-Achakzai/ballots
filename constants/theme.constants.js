import {
  Typography,
  Card,
  CardActionArea,
  Toolbar,
  styled,
} from "@mui/material";

export const CategoryBar = styled(Toolbar)({
  background: "Blue",
  marginBottom: "2rem",

  backgroundColor: "#091e2e",
});

export const BallotCard = styled(Card)({
  maxWidth: 345,
  margin: "1rem",
  minHeight: "10rem",
});

export const BallotCardAction = styled(CardActionArea)({
  textAlign: "center",
  padding: "1rem",
});

export const BallotTitle = styled(Typography)({
  fontSize: "1rem",
});
