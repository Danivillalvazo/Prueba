import { Grid, Paper, Typography } from "@mui/material";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Purchase Due"
            value="$307,144"
            color="#fde68a"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Sales Due"
            value="$4,385"
            color="#bbf7d0"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Sale Amount"
            value="$385,657"
            color="#bae6fd"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard
            title="Total Expense"
            value="$400"
            color="#fecaca"
          />
        </Grid>
      </Grid>

      <Paper sx={{ mt: 4, p: 3, borderRadius: 3 }}>
        <Typography variant="h6">Recent Products</Typography>
        <Typography color="text.secondary">
          (tabla dummy aquí)
        </Typography>
      </Paper>
    </>
  );
}
