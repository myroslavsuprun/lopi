import { BookCard } from "components";
import { Grid } from "@mui/material";

const Books = () => {
  return (
    <main>
      <Grid container spacing={2} columns={{ xs: 3, sm: 6, md: 12 }}>
        <Grid item xs={3} sm={3} md={4}>
          <BookCard />
        </Grid>
        <Grid item xs={3} sm={3} md={4}>
          <BookCard />
        </Grid>
        <Grid item xs={3} sm={3} md={4}>
          <BookCard />
        </Grid>
        <Grid item xs={3} sm={3} md={4}>
          <BookCard />
        </Grid>
        <Grid item xs={3} sm={3} md={4}>
          <BookCard />
        </Grid>
        <Grid item xs={3} sm={3} md={4}>
          <BookCard />
        </Grid>
        <Grid item xs={3} sm={3} md={4}>
          <BookCard />
        </Grid>
        <Grid item xs={3} sm={3} md={4}>
          <BookCard />
        </Grid>
        <Grid item xs={3} sm={3} md={4}>
          <BookCard />
        </Grid>
        <Grid item xs={3} sm={3} md={4}>
          <BookCard />
        </Grid>
      </Grid>
    </main>
  );
};

export default Books;
