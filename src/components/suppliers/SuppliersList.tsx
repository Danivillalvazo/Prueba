import { Grid } from "@mui/material";
import SupplierCard from "./SupplierCard";
import { suppliers } from "../../data/suppliers.data";

export default function SuppliersList({ handleOpen }: { handleOpen: () => void }) {
  return (
    <Grid container spacing={3}>
      {suppliers.map(supplier => (
        <Grid key={supplier.id}>
          <SupplierCard supplier={supplier} handleOpen={handleOpen} />
        </Grid>
      ))}
    </Grid>
  );
}
